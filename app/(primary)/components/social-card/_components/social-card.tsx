"use client";

import type * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

interface SocialCardProps {
  className?: string;
  image: string;
  title: string;
  name: string;
  pitch: string;
  icon?: React.ReactNode;
  buttons?: Array<{
    label: string;
    icon?: React.ReactNode;
    link?: string;
  }>;
}

const SocialCard = ({
  className,
  image,
  title,
  name,
  pitch,
  icon,
  buttons,
}: SocialCardProps) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative h-[350px] w-[280px] overflow-hidden rounded-2xl p-0 md:w-[300px]",
        "border border-neutral-200/60 bg-white/50 backdrop-blur-sm hover:cursor-pointer",
        "dark:border-neutral-800/60 dark:bg-neutral-950/50",
        "shadow-sm transition-shadow duration-300 hover:shadow-lg",
        className,
      )}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative mb-2 p-6 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                {icon}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800"></div>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {title}
            </h3>
            <div className="mt-1 h-0.5 w-12 bg-gradient-to-r from-neutral-400 to-neutral-200 dark:from-neutral-600 dark:to-neutral-800"></div>
          </div>
        </div>

        {isHovered && (
          <>
            <motion.img
              src={image}
              alt={title}
              className="absolute right-4 top-6 h-[72px] w-[72px] rounded-sm shadow-lg ring-2 ring-white dark:ring-neutral-900"
              width={500}
              height={500}
              layoutId="card-image"
              transition={{ duration: 0.3, ease: "circIn" }}
            />

            <motion.div
              className="absolute right-[14px] top-[21px] h-[78px] w-[77px] rounded-sm border border-dashed border-neutral-400/80 bg-transparent dark:border-neutral-600/80"
              initial={{ opacity: 0, scale: 1.6, filter: "blur(4px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ delay: 0.35, duration: 0.15, ease: "circIn" }}
            />
          </>
        )}
      </div>

      <div className="mb-4 flex flex-col items-center px-6">
        {!isHovered && (
          <>
            <motion.img
              src={image}
              alt={title}
              className="h-[130px] w-[130px] rounded-2xl border-4 border-white shadow-xl ring-1 ring-neutral-200/50 dark:border-neutral-900 dark:ring-neutral-800/50"
              width={500}
              height={500}
              layoutId="card-image"
              transition={{ duration: 0.3, ease: "circIn" }}
            />
            <div className="mt-4 text-center">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {name}
              </h4>
            </div>
          </>
        )}
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 rounded-t-2xl border-t border-neutral-200/80 bg-white/95 px-6 pb-5 pt-3 backdrop-blur-sm dark:border-neutral-800/80 dark:bg-neutral-950/95"
        initial={{ y: "100%" }}
        animate={{
          y: isHovered ? 0 : "calc(100% - 43px)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="text-neutral-900 dark:text-neutral-100">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            <span>Connect with me</span>
            <span>
              <LuArrowUpRight />
            </span>
          </div>
          <p className="mb-4 text-xs font-medium leading-relaxed text-neutral-600 dark:text-neutral-400">
            {pitch}
          </p>

          <div className="space-y-2">
            {buttons?.map((button, index) => (
              <Link
                target="_blank"
                href={button.link ?? ""}
                key={index}
                className="flex w-full items-center gap-3 rounded-xl border border-neutral-200/60 bg-neutral-50/80 px-4 py-3 text-sm font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-100/80 hover:text-neutral-900 dark:border-neutral-800/60 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/80 dark:hover:text-neutral-100"
              >
                <span className="flex h-5 w-5 items-center justify-center text-neutral-500 dark:text-neutral-400">
                  {button.icon}
                </span>
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SocialCard;
