"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import RequestComponents from './requestforcomponents';
import Floatingsvgs from './floatingsvgs';
import Techstacksectionhero from './techstacksectionhero';
import Herobuttons from './herobuttons';

const words = ['Upgrade', 'Enhance', '\u00A0Improve']

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const handleGlobalMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);



  return (
    <div>
      <RequestComponents />
      <div className='py-2 lg:py-16'>
        <div className='max-w-[44rem] mx-auto relative' onMouseMove={handleMouseMove}>
          <Floatingsvgs x={mousePosition.x} y={mousePosition.y} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[88rem] mx-auto px-4 py-4 flex flex-col gap-4 items-center justify-center space-y-3"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="tracking-tighter max-w-[40rem] text-4xl lg:text-6xl text-center font-bold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                >
                  <div className='w-[9rem] lg:w-[14rem] h-8 lg:h-12 text-left overflow-visible mr-1 lg:mr-4'>
                    {words[currentWord]}
                  </div>
                </motion.span>
              </AnimatePresence>{''}your website&apos;s appearance in no time.
            </h1>
          </div>
          <p className="bg-clip-text text-transparent bg-gradient-to-br from-zinc-800/80 via-zinc-700/70 to-zinc-900/40 dark:from-white/70 dark:via-white/70 dark:to-white/30 max-w-sm sm:max-w-[34rem] text-center text-[0.9rem] md:text-base">
            Effortlessly build accessible, high-quality web apps by copy-pasting trending React components with seamless styling.
          </p>
          <Herobuttons />
          <Techstacksectionhero />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection

