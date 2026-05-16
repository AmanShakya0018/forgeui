"use client";

import { motion } from "motion/react";

interface ToggleManualCliProps {
  sourceManual: boolean;
  setSourceManual: (sourceManual: boolean) => void;
}

export default function ToggleManualCli({
  sourceManual,
  setSourceManual,
}: ToggleManualCliProps) {
  return (
    <>
      <h2
        id="installation"
        className="mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight text-black first:mt-0 dark:text-white"
      >
        Installation
      </h2>
      <div className="xs:flex-row xs:justify-between my-6 flex flex-col gap-2 border-b border-neutral-300/50 dark:border-neutral-800/60">
        <div className="relative flex flex-row gap-2">
          <button
            className={`relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none px-4 pt-2 pb-3 text-sm font-medium transition-colors ${
              !sourceManual
                ? "text-zinc-950 duration-300 dark:text-white"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
            onClick={() => setSourceManual(false)}
          >
            {!sourceManual && (
              <motion.div
                layoutId="toggle-underline"
                className="bg-primary absolute right-0 bottom-0 left-0 h-0.5"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span>CLI</span>
          </button>
          <button
            className={`relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none px-4 pt-2 pb-3 text-sm font-medium transition-colors ${
              sourceManual
                ? "text-zinc-950 duration-300 dark:text-white"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
            onClick={() => setSourceManual(true)}
          >
            {sourceManual && (
              <motion.div
                layoutId="toggle-underline"
                className="bg-primary absolute right-0 bottom-0 left-0 h-0.5"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span>Manual</span>
          </button>
        </div>
      </div>
    </>
  );
}
