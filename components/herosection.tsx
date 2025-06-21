"use client";
import React from "react";
import Techstacksectionhero from "./techstacksectionhero";
import Herobuttons from "./herobuttons";
import HeroBadge from "./landing/hero-badge";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center">
      <div className="z-[3] flex flex-col items-center justify-center gap-20 text-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="space-y-6">
            <HeroBadge />
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
                duration: 0.5,
                delay: 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="bg-gradient-stop mx-auto max-w-3xl text-balance bg-gradient-to-br from-foreground via-foreground via-50% to-foreground/30 bg-clip-text py-2 text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-6xl lg:text-7xl"
            >
              Build Beautiful UI Faster
            </motion.h1>
          </div>
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
              duration: 0.4,
              delay: 0.4,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="mb-6 max-w-sm text-balance bg-gradient-to-br from-zinc-800/80 via-zinc-700/70 to-zinc-900/40 bg-clip-text text-center text-[0.87rem] text-transparent dark:from-white/70 dark:via-white/70 dark:to-white/30 sm:max-w-[32rem] md:text-[1.15rem]"
          >
            Launch sleek, responsive UIs in minutes using
            ready&#8209;to&#8209;use components built for speed, simplicity, and
            scalability.
          </motion.p>
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
              delay: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Herobuttons />
          </motion.div>
        </div>
        <div className="space-y-4">
          <Techstacksectionhero />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
