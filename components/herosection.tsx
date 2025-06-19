"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RequestComponents from "./requestforcomponents";
import Floatingsvgs from "./floatingsvgs";
import Techstacksectionhero from "./techstacksectionhero";
import Herobuttons from "./herobuttons";

const words = ["Upgrade", "Enhance", "\u00A0Improve"];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="py-2 lg:py-16">
        <div
          className="relative mx-auto max-w-[44rem]"
          onMouseMove={handleMouseMove}
        >
          <Floatingsvgs x={mousePosition.x} y={mousePosition.y} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[88rem] flex-col items-center justify-center gap-4 space-y-3 px-4 py-4"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="max-w-[40rem] text-center text-4xl font-bold tracking-tighter lg:text-6xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  <div className="mr-1 h-8 w-[9rem] overflow-visible text-left lg:mr-4 lg:h-12 lg:w-[14rem]">
                    {words[currentWord]}
                  </div>
                </motion.span>
              </AnimatePresence>
              {""}your website&apos;s appearance in no time.
            </h1>
          </div>
          <p className="max-w-sm bg-gradient-to-br from-zinc-800/80 via-zinc-700/70 to-zinc-900/40 bg-clip-text text-center text-[0.9rem] text-transparent dark:from-white/70 dark:via-white/70 dark:to-white/30 sm:max-w-[34rem] md:text-base">
            Effortlessly build accessible, high-quality web apps by copy-pasting
            trending React components with seamless styling.
          </p>
          <Herobuttons />
          <Techstacksectionhero />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
