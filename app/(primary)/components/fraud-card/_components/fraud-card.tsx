"use client";
import "./fraudcard.css";
import { cn } from "@/lib/utils";
import { TbCircleDotted } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";
import { motion, Variants } from "motion/react";
import { useState } from "react";

type BlockedEmail = {
  email: string;
  time: string;
};

type FraudCardProps = {
  blockedEmails: BlockedEmail[];
};

const FraudCard = ({ blockedEmails }: FraudCardProps) => {
  const [hovered, setHovered] = useState(false);

  const parentvariant = {
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.075,
        delayChildren: 0.15,
      },
    },
  };

  const emailvariant = {
    open: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.3 },
    },
    close: {
      opacity: 0,
      filter: "blur(10px)",
      y: 5,
      transition: { duration: 0.3 },
    },
  };

  const iconvariant = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    close: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.3 },
    },
  };

  const timevariant = {
    open: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.3 },
    },
    close: {
      opacity: 0,
      filter: "blur(5px)",
      y: 10,
      transition: { duration: 0.3 },
    },
  };

  const circlevariant: Variants = {
    open: {
      rotate: 360,
      transition: {
        ease: "linear",
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
    close: {
      rotate: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
        repeat: 0,
      },
    },
  };

  return (
    <motion.div
      onClick={() => setHovered((prev) => !prev)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      variants={parentvariant}
      animate={hovered ? "open" : "close"}
      initial="close"
      className={cn(
        "h-[34rem] min-h-[34rem] w-[350px] max-w-[350px]",
        "group overflow-hidden border shadow-md",
        "clbeam-container relative flex flex-col items-center",
        "rounded-md bg-neutral-50 text-white dark:bg-neutral-900",
      )}
    >
      <div className={cn("flex flex-col gap-2 px-4 pt-4")}>
        <h2 className="text-[14px] font-bold text-primary">
          Email Security Enhancements
        </h2>
        <p className="text-[11px] text-neutral-500 sm:text-xs">
          Improve account integrity and reduce fake registrations by identifying
          temporary inboxes and filtering suspicious patterns in email addresses
          used.
        </p>
      </div>
      <div className="relative flex h-full w-[300px] flex-col">
        <div className="mt-8 py-3">
          <div className="relative z-[10] flex items-center justify-center gap-2 rounded-[6px] bg-neutral-50 p-0.5 shadow-md dark:bg-black">
            <div className="flex h-full w-full items-center justify-between gap-3 rounded-[4px] bg-neutral-100 p-3 dark:bg-neutral-800">
              <div className="flex items-center justify-center gap-4">
                <motion.div variants={circlevariant} className="h-4 w-4">
                  <TbCircleDotted className="h-full w-full text-primary" />
                </motion.div>
                <p className="font-mono text-[10px] text-neutral-600 transition-all duration-300 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100">
                  Malicious email activity flagged
                </p>
              </div>
              <p className="text-[10px] text-neutral-500">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full">
          <svg
            className="h-full w-full stroke-current text-neutral-400 dark:text-neutral-700"
            width="100%"
            height="100%"
            viewBox="0 0 52 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0.1">
              <path d="M 3.7 0 v 5.8 l 6.7 5.9 v 60" />
            </g>
            <g mask="url(#clbeam-mask-1)">
              <circle
                className="clbeam clbeam-line-1"
                cx="0"
                cy="0"
                r="12"
                fill="url(#clbeam-red-grad)"
              />
            </g>
            <defs>
              <mask id="clbeam-mask-1">
                <path
                  d="M 3.7 0 v 5.8 l 6.7 5.9 v 60"
                  stroke="white"
                  strokeWidth="0.15"
                />
              </mask>
              <radialGradient id="clbeam-red-grad" fx="1">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-x-12 top-[130px] flex w-fit flex-col items-center justify-center">
          <div className="flex h-full w-full flex-col items-center justify-center gap-9">
            {blockedEmails.map(({ email, time }) => (
              <div key={email} className="flex h-full w-full justify-start">
                <div className="relative mr-2 mt-1.5 h-6 w-6">
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10">
                    <GoDotFill className="h-2.5 w-2.5 text-neutral-400 dark:text-neutral-500" />
                  </div>
                  <motion.div
                    variants={iconvariant}
                    className="absolute inset-0 flex items-center justify-center rounded-full bg-red-500 p-1"
                  >
                    <RxCross2 className="h-4 w-4 text-neutral-100 dark:text-neutral-800" />
                  </motion.div>
                </div>
                <div className="flex flex-col items-start justify-center gap-1 p-1">
                  <motion.h2
                    variants={emailvariant}
                    className="text-[10px] font-semibold text-neutral-800 dark:text-neutral-200 sm:text-xs"
                  >
                    {email}
                  </motion.h2>
                  <motion.p
                    variants={timevariant}
                    className="font-mono text-[9px] text-neutral-500"
                  >
                    Blocked {time}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FraudCard;
