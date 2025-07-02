"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const BuildComponents = () => {
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
        className="mb-2 text-center text-sm text-neutral-500"
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
          delay: 0.1,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="mx-auto mb-2 max-w-3xl text-balance bg-gradient-to-br from-neutral-100 via-neutral-100 via-50% to-neutral-100/30 bg-clip-text py-2 text-center text-4xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-5xl"
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
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="mb-8 max-w-sm text-balance bg-gradient-to-br from-white/70 via-white/70 to-white/30 bg-clip-text text-center text-[0.8rem] text-transparent sm:max-w-[32rem] sm:text-[0.87rem] lg:text-[1rem]"
      >
        Create responsive, production-ready interfaces using components designed
        for performance, accessibility, and easy customization.
      </motion.p>
    </>
  );
};

export default BuildComponents;

export const ExploreComponentsButton = () => {
  return (
    <Link href="/components/animated-form">
      <motion.div
        initial={{
          y: 5,
          filter: "blur(5px)",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="group relative z-20 mt-12 flex h-9 w-full cursor-pointer items-center justify-center gap-1 rounded-lg bg-neutral-300 px-4 py-1.5 text-[0.9rem] font-semibold text-black no-underline transition-all duration-300 hover:bg-white md:h-10 md:rounded-xl md:px-5 md:py-2 md:text-[1rem]"
      >
        Explore All Components
        <ChevronRight className="mt-0.5 h-3.5 w-3.5 transition-all duration-200 ease-in-out group-hover:translate-x-2 md:h-4 md:w-4 md:group-hover:translate-x-3" />
      </motion.div>
    </Link>
  );
};
