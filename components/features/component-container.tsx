"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

type ComponenetContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const ComponenetContainer = ({
  children,
  className,
}: ComponenetContainerProps) => {
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
        delay: 0.3,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-secondary/40 px-2 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:py-10",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export default ComponenetContainer;
