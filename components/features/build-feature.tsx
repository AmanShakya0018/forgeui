"use client";
import { motion } from "motion/react";
import React from "react";

const BuildFeature = () => {
  return (
    <>
      <motion.p
        initial={{
          y: 10,
          filter: "blur(10px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="text-center text-sm text-neutral-500"
      >
        Build
      </motion.p>
      <motion.h1
        initial={{
          y: 10,
          filter: "blur(10px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-balance bg-gradient-to-br from-foreground via-foreground via-50% to-foreground/30 bg-clip-text py-2 text-center text-4xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-5xl"
      >
        Visually Stunning Interfaces With Complete Design Freedom
      </motion.h1>
      <motion.p
        initial={{
          y: 10,
          filter: "blur(10px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="mb-6 max-w-sm text-balance bg-gradient-to-br from-zinc-800/80 via-zinc-700/70 to-zinc-900/40 bg-clip-text text-center text-[0.8rem] text-transparent dark:from-white/70 dark:via-white/70 dark:to-white/30 sm:max-w-[32rem] sm:text-[0.87rem] lg:text-[1rem]"
      >
        Create responsive, production-ready interfaces using components designed
        for performance, accessibility, and easy customization.
      </motion.p>
    </>
  );
};

export default BuildFeature;
