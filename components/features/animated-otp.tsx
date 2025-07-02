"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import ComponentContainer from "./component-container";

const digits = ["4", "8", "3", "1", "9", "7"];

const AnimatedOTP = () => {
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  });

  return (
    <ComponentContainer className="md:py-20">
      <OTPinput key={animationKey} />
    </ComponentContainer>
  );
};

export default AnimatedOTP;

const OTPinput = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (activeIndex > digits.length - 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 400);

    if (activeIndex === digits.length - 1) {
      setTimeout(() => {
        setFadeOut(true);
      }, 450);
    }

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      className={cn(
        "relative",
        "flex items-center justify-center",
        "h-[14rem] w-full max-w-[350px]",
        "rounded-md border border-neutral-800 bg-neutral-900",
      )}
    >
      <div className="absolute left-1/2 top-[25%] -translate-x-1/2">
        <div className="flex w-full items-center justify-center gap-3">
          {digits.map((digit, idx) => (
            <div
              key={idx}
              className={cn(
                "relative flex h-10 w-8 cursor-default items-center justify-center rounded-md bg-gradient-to-br from-neutral-800 to-neutral-800 text-white",
              )}
            >
              <motion.div
                className="absolute inset-0 rounded-md border border-cyan-400"
                initial={{
                  opacity: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.85, 1.3],
                  filter: "blur(2px)",
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 2.25,
                }}
                style={{
                  boxShadow: "inset 0 0 12px rgba(34, 211, 238, 0.5)",
                }}
              />
              {activeIndex === idx && (
                <motion.div
                  key={idx}
                  layoutId="glow"
                  className="absolute inset-0 rounded-md border border-cyan-400"
                  initial={
                    idx === 0 ? { opacity: 0, scale: 1.7 } : { scale: 1.7 }
                  }
                  animate={idx === 0 ? { opacity: 1, scale: 1 } : { scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                  style={{
                    boxShadow: "inset 0 0 12px rgba(34, 211, 238, 0.6)",
                  }}
                >
                  <svg
                    viewBox=" 0 0 20 20"
                    className="absolute inset-0 h-full w-full"
                    strokeWidth="0.4"
                  >
                    <path
                      d="M 3 19 h 14"
                      className="stroke-cyan-400 dark:stroke-cyan-500"
                    />
                  </svg>
                </motion.div>
              )}
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: fadeOut ? 0 : 1,
                }}
                transition={{
                  duration: fadeOut ? 0.2 : 0.3,
                  ease: "easeInOut",
                  delay: fadeOut ? 0 : idx * 0.43,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {digit}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 w-full px-3">
        <h3 className="text-sm font-semibold text-white">Secure Access</h3>
        <p className="mt-2 text-xs text-neutral-400">
          Protect accounts with a one-time password, auto-applied during every
          user login for enhanced security.
        </p>
      </div>
    </div>
  );
};
