"use client";
import React from "react";
import { eliteItems, introItems, primaryItems } from "@/contants";
import Anchor from "../ui/anchor-single";
import { motion } from "motion/react";
import TextShimmer from "@/app/(primary)/components/text-shimmer/_components/text-shimmer";

const PrimaryItems = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const sortedEliteItems = [...eliteItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col gap-6 pr-6">
      <div className="flex flex-col gap-1">
        <motion.div
          initial={{
            y: 5,
            filter: "blur(2px)",
            opacity: 0,
          }}
          animate={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70"
        >
          Getting Started
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid gap-1"
        >
          {introItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col gap-1">
        <motion.div
          initial={{
            y: 5,
            filter: "blur(2px)",
            opacity: 0,
          }}
          animate={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70"
        >
          Featured Components
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid gap-1"
        >
          {sortedEliteItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col gap-1">
        <motion.div
          initial={{
            y: 5,
            filter: "blur(2px)",
            opacity: 0,
          }}
          animate={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="px-3 py-2 text-[0.8rem] font-normal uppercase tracking-widest text-muted-foreground/70"
        >
          Basic Components
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid gap-1"
        >
          {sortedPrimaryItems.map((item) => (
            <Anchor key={item.name + item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            <TextShimmer
              className="mt-4 cursor-default pl-3 text-xs"
              repeatDelay={0.5}
              delay={1.5}
            >
              New drops incoming...
            </TextShimmer>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrimaryItems;
