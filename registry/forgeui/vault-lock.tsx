"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import React, { useState } from "react";

type VaultLockProps = {
  cardTitle?: string;
  cardDescription?: string;
};

const VaultLock = ({
  cardTitle = "Vault Access",
  cardDescription = "Smooth and secure login experience, backed by encrypted access and seamless visual transitions",
}: VaultLockProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const vaultVariant: Variants = {
    open: {
      transform: "translateY(-20px)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    close: {
      transform: "translateY(0px)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const inputVariant: Variants = {
    open: {
      transform: "translateY(-12px)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    close: {
      transform: "translateY(0px)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const shineVariant: Variants = {
    open: {
      transform: "translateX(-50%) translateY(0%) rotate(45deg)",
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
        delay: 2.1,
      },
    },
    close: {
      transform: "translateX(-125%) translateY(-60%) rotate(45deg)",
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const lockVariant: Variants = {
    open: {
      transform: "rotate(90deg)",
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
        delay: 2,
      },
    },
    close: {
      transform: "rotate(0deg)",
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const codeVariant: Variants = {
    open: (index: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3 + index * 0.15,
        ease: "easeInOut",
      },
    }),
    close: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 1.02,
      transition: {
        duration: 0.2,
        delay: 0,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="close"
      animate={isHovered ? "open" : "close"}
      className={cn(
        "group relative",
        "h-[16rem] w-[400px]",
        "rounded-md border border-neutral-800 bg-neutral-900",
      )}
    >
      <motion.div
        variants={vaultVariant}
        className={cn(
          "absolute inset-x-0 mx-auto",
          "top-[80px] h-[8rem] w-[95%] max-w-[20rem] p-6",
          "border-t border-neutral-700/70 bg-gradient-to-b from-neutral-800 to-neutral-900 text-white shadow-lg",
        )}
        style={{
          clipPath:
            "polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, 0% 100%, 0% 30px)",
        }}
      />
      <motion.div
        variants={vaultVariant}
        className={cn(
          "absolute inset-x-0 mx-auto",
          "top-[40px] flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-full bg-neutral-950 p-1",
        )}
      >
        <motion.div
          variants={shineVariant}
          className="absolute left-1/2 top-0 h-full w-10 rounded-full bg-[linear-gradient(90deg,transparent,theme(colors.white/50%)_30%,white,theme(colors.white/50%)_70%,transparent)] opacity-30"
        />
        <motion.div
          variants={lockVariant}
          className="flex h-full w-full items-center justify-center rounded-full border border-neutral-800 bg-[repeating-radial-gradient(rgba(60,60,60,0.6)_0.15rem,rgba(40,40,40,0.5)_0.32rem)]"
        >
          <div className="flex h-full w-[10px] items-center justify-center">
            <svg
              width="8"
              height="36"
              viewBox="0 0 8 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_1px_2px_rgba(15,15,15,0.50)]"
            >
              <path
                className="fill-neutral-950"
                d="M3 0C1.34315 0 0 1.34315 0 3V19.5858C0 19.851 0.105357 20.1054 0.292893 20.2929L3.29289 23.2929C3.68342 23.6834 3.68342 24.3166 3.29289 24.7071L0.292893 27.7071C0.105357 27.8946 0 28.149 0 28.4142V33C0 34.6569 1.34315 36 3 36H5C6.65685 36 8 34.6569 8 33V16.4142C8 16.149 7.89464 15.8946 7.70711 15.7071L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L7.70711 8.29289C7.89464 8.10536 8 7.851 8 7.58579V3C8 1.34315 6.65685 0 5 0H3Z"
              ></path>
            </svg>
          </div>
        </motion.div>
        <div className="absolute inset-x-0 top-0 mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-full border-[4px] border-neutral-950" />
      </motion.div>
      <motion.div
        variants={vaultVariant}
        className="absolute inset-x-0 top-[40px] mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-full border-b-[3px] border-neutral-700/70"
      />
      <motion.div
        variants={inputVariant}
        className={cn(
          "absolute inset-x-0 mx-auto",
          "top-[135px] flex w-[95%] max-w-[240px] items-center justify-between",
          "rounded-md border border-neutral-900 bg-neutral-800/90 p-2",
          "drop-shadow-[0_2px_5px_rgba(15,15,15,0.50)] transition-all duration-300",
          "group-hover:border-cyan-500 group-hover:[box-shadow:inset_0_0_5px_#06b6d4] group-hover:[filter:drop-shadow(0_0_2px_#06b6d4)]",
        )}
      >
        <div className="ml-2 text-xs text-cyan-500 group-hover:[filter:drop-shadow(0_0_4px_#000)]">
          {"••••••••••".split("").map((char, index) => (
            <motion.span
              key={`char-${index}`}
              className="mr-1 inline-block font-[350]"
              variants={codeVariant}
              custom={index}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>
      <div className="absolute bottom-4 left-0 w-full px-3">
        <h3 className="text-sm font-semibold text-white">{cardTitle}</h3>
        <p className="mt-2 text-xs text-neutral-400">{cardDescription}</p>
      </div>
    </motion.div>
  );
};

export default VaultLock;
