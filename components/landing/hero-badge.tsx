"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const HeroBadge = () => {
  return (
    <motion.button
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
        duration: 0.5,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="group relative mx-auto max-w-fit rounded-full border border-neutral-400/20 bg-neutral-100 py-[0.3125rem] pl-[0.375rem] pr-[0.75rem] dark:border-neutral-700/70 dark:bg-[rgb(22,22,22)] dark:shadow-inner dark:shadow-neutral-800/80"
    >
      <div className="relative z-10 flex items-center justify-between pr-1">
        <div className="mr-[0.625rem] h-[1rem] w-[1.875rem] rounded-full bg-yellow-400/30 text-center text-[0.625rem] font-medium leading-[150%] text-yellow-600 dark:text-yellow-200">
          New
        </div>
        <span className="relative text-[10px] font-medium leading-none text-primary/70 sm:text-xs">
          In Development
        </span>
        <ChevronRight className="ml-2 mt-0.5 h-3 w-3 transition-all duration-200 ease-in-out group-hover:translate-x-1" />
      </div>
      <div className="absolute inset-0 -z-[1] hidden h-full w-full rounded-full bg-black/15 blur-[2px] transition-all duration-500 group-hover:block group-hover:animate-pulse dark:bg-white/15" />
    </motion.button>
  );
};

export default HeroBadge;
