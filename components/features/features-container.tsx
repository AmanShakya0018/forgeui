"use client";
import { motion } from "motion/react";
import React from "react";

type FeaturesContainerProps = {
  children: React.ReactNode;
};

const FeaturesContainer = ({ children }: FeaturesContainerProps) => {
  return (
    <motion.div
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
      className="relative flex w-full flex-col gap-2 rounded-2xl border border-neutral-800/60 px-6 py-6 md:py-10"
    >
      {children}
    </motion.div>
  );
};

export default FeaturesContainer;
