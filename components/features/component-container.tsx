"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

type ComponentContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const ComponentContainer = ({
  children,
  className,
}: ComponentContainerProps) => {
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
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-800/60 px-2 py-4 sm:py-10",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export default ComponentContainer;
