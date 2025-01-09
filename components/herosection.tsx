"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';

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

  const floatingVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        },
        opacity: {
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
  };


  return (
    <div className='py-2 lg:py-24'>
      <div className='max-w-[44rem] mx-auto relative' onMouseMove={handleMouseMove}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="TypeScript"
          role="img"
          viewBox="0 0 512 512"
          className="hidden lg:block w-12 h-12 absolute -top-10 -left-24 -rotate-12 drop-shadow-[0_16px_24px_rgba(49,120,198,0.35)]"
          style={{
            x: mousePosition.x * 0.04,
            y: mousePosition.y * 0.04,
          }}
          variants={floatingVariant}
          initial="initial"
          animate="animate"
        >
          <rect width="512" height="512" rx="15%" fill="#3178c6" />
          <path
            fill="#ffffff"
            d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"
          />
        </motion.svg>
        <motion.svg
          className="hidden lg:block size-14 absolute top-80 -left-32 rotate-12 drop-shadow-[0_16px_24px_rgba(247,147,20,0.35)]"
          style={{
            x: mousePosition.x * 0.04,
            y: mousePosition.y * 0.04,
          }}
          variants={floatingVariant}
          initial="initial"
          animate="animate"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Bitcoin"
          role="img"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" rx="15%" fill="#fabe19" />
          <path
            fill="#ffffff"
            d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3618.6 3618.6"
          className="hidden lg:block w-12 h-12 absolute bottom-10 -right-32 rotate-12 drop-shadow-[0_16px_24px_rgba(49,120,198,0.35)]"
          style={{
            x: mousePosition.x * 0.04,
            y: mousePosition.y * 0.04,
          }}
          variants={floatingVariant}
          initial="initial"
          animate="animate"
        >
          <style>
            {`.st1{fill:#00d8ff}.st2{fill:none;stroke:#00d8ff;stroke-width:144.7456;stroke-miterlimit:10}`}
          </style>
          <circle className="st1" cx="1806.5" cy="1807.1" r="302.6" />
          <path
            className="st2"
            d="M1806.5 1191.9c406.2 0 783.6 58.3 1068.1 156.2 342.8 118 553.6 296.9 553.6 458.9 0 168.8-223.4 358.9-591.5 480.8-278.3 92.2-644.6 140.4-1030.2 140.4-395.4 0-769.7-45.2-1051.2-141.4-356.1-121.7-570.6-314.2-570.6-479.8 0-160.7 201.3-338.2 539.3-456 285.6-99.5 672.3-159.1 1082.5-159.1z"
          />
          <path
            className="st2"
            d="M1271 1501.3c202.9-351.9 442-649.7 669-847.2 273.5-238 533.8-331.2 674.1-250.3 146.2 84.3 199.3 372.8 121 752.7-59.2 287.2-200.4 628.5-393.1 962.6-197.5 342.5-423.7 644.2-647.6 840-283.3 247.7-557.3 337.3-700.7 254.6-139.2-80.3-192.4-343.3-125.7-695 56.4-297.4 198-662.1 403-1017.4z"
          />
          <path
            className="st2"
            d="M1271.5 2119.8c-203.5-351.6-342.1-707.4-399.9-1002.7-69.6-355.8-20.4-627.9 119.8-709 146.1-84.6 422.5 13.5 712.5 271 219.3 194.7 444.4 487.5 637.6 821.3 198.1 342.2 346.6 688.8 404.3 980.5 73.1 369.2 13.9 651.3-129.4 734.2-139.1 80.5-393.5-4.7-664.9-238.2-229.2-197.3-474.5-502.1-680-857.1z"
          />
        </motion.svg>
        <motion.svg
          className="hidden lg:block size-14 absolute top-96 -right-32 drop-shadow-[0_16px_24px_rgba(0,0,255,0.35)] "
          style={{
            x: mousePosition.x * 0.02, // Parallax effect based on mouse position
            y: mousePosition.y * 0.02,
          }}
          variants={floatingVariant}
          initial="initial"
          animate="animate"
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.01,5.03,23.244,2.254a1.742,1.742,0,0,0-1.989.338L2.38,19.8A1.166,1.166,0,0,0,2.3,21.447c.025.027.05.053.077.077l1.541,1.4a1.165,1.165,0,0,0,1.489.066L28.142,5.75A1.158,1.158,0,0,1,30,6.672V6.605A1.748,1.748,0,0,0,29.01,5.03Z"
            fill="#0065a9"
          />
          <path
            d="M29.01,26.97l-5.766,2.777a1.745,1.745,0,0,1-1.989-.338L2.38,12.2A1.166,1.166,0,0,1,2.3,10.553c.025-.027.05-.053.077-.077l1.541-1.4A1.165,1.165,0,0,1,5.41,9.01L28.142,26.25A1.158,1.158,0,0,0,30,25.328V25.4A1.749,1.749,0,0,1,29.01,26.97Z"
            fill="#007acc"
          />
          <path
            d="M23.244,29.747a1.745,1.745,0,0,1-1.989-.338A1.025,1.025,0,0,0,23,28.684V3.316a1.024,1.024,0,0,0-1.749-.724,1.744,1.744,0,0,1,1.989-.339l5.765,2.772A1.748,1.748,0,0,1,30,6.6V25.4a1.748,1.748,0,0,1-.991,1.576Z"
            fill="#1f9cf0"
          />
        </motion.svg>
      </div>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10, delay: 0.2 }}
        initial={{ y: -20, opacity: 0 }}
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
        <p className="text-primary/80 max-w-[34rem] text-center tracking-tight md:text-lg font-light">
          Effortlessly build accessible, high-quality web apps by copy-pasting trending React components with seamless styling.
        </p>
        <div className='flex gap-4'>
          <Link href="/components/alerts">
            <Button size="sm">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/introduction">
            <Button size="sm" variant="ghost">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="flex  justify-start items-center mb-4 overflow-x-auto relative z-20 no-visible-scrollbar ">
          <div className="flex items-center space-x-2 mr-4">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path><path d="M15 12v-3"></path></svg>
            </span>
            <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">Next.js</span>
          </div>
          <div className="flex items-center space-x-2 mr-4">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg>
            </span>
            <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">React</span>
          </div>
          <div className="flex items-center space-x-2 mr-4">
            <span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-[0.5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path></svg>
            </span>
            <span className="text-sm font-semibold text-neutral-500 flex-shrink-0">TailwindCSS</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection

