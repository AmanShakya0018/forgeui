"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type BotDetectionProps = {
  cardTitle?: string;
  cardDescription?: string;
};

const positions = [
  { top: "80px", left: "34px" },
  { top: "161px", left: "90px" },
  { top: "120px", left: "230px" },
  { top: "203px", left: "165px" },
  { top: "100px", left: "120px" },
  { top: "164px", left: "15px" },
  { top: "238px", left: "61px" },
  { top: "180px", left: "237px" },
  { top: "53px", left: "204px" },
];

const BotDetection = ({
  cardTitle = "Bot Detection",
  cardDescription = "Experience fewer fraudulent sign-ups with our sophisticated, AI-driven bot detection that constantly adapts, ensuring high accuracy and efficient platform protection.",
}: BotDetectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(1);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % positions.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "h-[30rem] w-full max-w-[350px]",
        "rounded-md border border-neutral-800 bg-black",
      )}
    >
      <div className="absolute left-1/2 h-full min-w-[300px] max-w-[300px] -translate-x-1/2">
        <div className="relative h-[80%] w-full">
          <motion.div
            className="pointer-events-none absolute bottom-[20px] left-[148px] h-[250px] w-[250px] origin-bottom-left"
            style={{
              background:
                "radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.3) 5%, transparent 60%)",
            }}
            initial={{ opacity: 0.7, rotate: -55 }}
            animate={{
              opacity: [0.7, 1, 0.7],
              rotate: [-55, -40, -50, -45, -55, -50, -45, -50, -45, -55],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <ContainerMask />
          <svg
            width="100%"
            height="100%"
            className="pointer-events-none absolute left-0 top-0 animate-pulse"
          >
            {positions.map((pos, i) => (
              <g key={i}>
                <rect
                  x={pos.left}
                  y={pos.top}
                  width={5}
                  height={5}
                  rx={1}
                  ry={1}
                  fill="#404040"
                />
              </g>
            ))}
          </svg>
          <motion.div
            layoutId="highlight-dot"
            className="absolute flex h-[6.5px] w-[6.5px] -translate-x-[0.5px] -translate-y-[0.5px] items-center justify-center rounded-[1px] border-t border-red-400 bg-red-500 shadow-[0_0_10px_4px_rgba(239,68,68,0.9)]"
            style={positions[currentIndex]}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 70,
            }}
          >
            <motion.div
              key={`pulse-${currentIndex}`}
              className="absolute -left-1.5 -top-1.5 h-[300%] w-[270%] rounded-full border border-red-500"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 1.7, opacity: [0.7, 1, 0] }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 1.3,
              }}
            />
            <motion.div
              key={currentIndex}
              initial={{
                scale: 1,
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1.3,
              }}
              className="absolute -left-1.5 -top-1.5 h-[300%] w-[270%] scale-[1.3] rounded-full border-[1px] border-red-500 shadow-[0_0_20px_4px_rgba(239,68,68,0.6)]"
            />
          </motion.div>
          <div className="absolute bottom-2 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full border border-neutral-800 bg-black" />
        </div>
      </div>
      <div className="absolute bottom-5 left-0 w-full px-3">
        <h3 className="text-sm font-semibold text-neutral-100">{cardTitle}</h3>
        <p className="mt-2 text-xs text-neutral-400">{cardDescription}</p>
      </div>
    </div>
  );
};

export default BotDetection;

const ContainerMask = () => {
  return (
    <>
      <div className="absolute left-1/2 top-[48px] h-full w-[130%] -translate-x-1/2 rounded-full border-t border-dashed border-neutral-700/80" />
      <div className="absolute left-1/2 top-[100px] h-full w-[110%] -translate-x-1/2 rounded-full border-t border-dashed border-neutral-700/80" />
      <div className="absolute left-1/2 top-[152px] h-full w-[100%] -translate-x-1/2 rounded-full border-t border-dashed border-neutral-700/80" />
      <div className="absolute left-1/2 top-[204px] h-full w-[80%] -translate-x-1/2 rounded-full border-t border-dashed border-neutral-700/80" />
    </>
  );
};
