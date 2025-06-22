"use client";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

interface ToggleButtonGroupProps {
  routepoint: string;
  sourceCode: boolean;
  setSourceCode: (value: boolean) => void;
}

const ToggleButtonGroup = ({
  sourceCode,
  setSourceCode,
  routepoint,
}: ToggleButtonGroupProps) => {
  return (
    <div className="mb-4 mt-12 flex flex-col gap-2 border-b border-zinc-200 dark:border-zinc-800 xs:flex-row xs:justify-between">
      <div className="relative flex flex-row gap-2">
        <button
          className={`relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none px-4 pb-3 pt-2 text-sm font-medium transition-colors ${
            !sourceCode
              ? "text-zinc-950 duration-300 dark:text-white"
              : "text-neutral-500 dark:text-neutral-400"
          }`}
          onClick={() => setSourceCode(false)}
        >
          {!sourceCode && (
            <motion.div
              layoutId="preview-code-underline"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M6 8h.01"></path>
            <path d="M9 8h.01"></path>
          </svg>
          <span>Preview</span>
        </button>
        <button
          className={`relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none px-4 pb-3 pt-2 text-sm font-medium transition-colors ${
            sourceCode
              ? "text-zinc-950 duration-300 dark:text-white"
              : "text-neutral-500 dark:text-neutral-400"
          }`}
          onClick={() => setSourceCode(true)}
        >
          {sourceCode && (
            <motion.div
              layoutId="preview-code-underline"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
          <Code2 className="h-4 w-4" />
          <span>Code</span>
        </button>
      </div>
      <Link
        href={`/preview/${routepoint}`}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "hidden items-center gap-2 pb-2 pr-1 xs:flex",
          "text-sm font-medium",
          "text-zinc-800 dark:text-zinc-200",
          "hover:text-zinc-600 dark:hover:text-zinc-400",
          "group no-underline transition-all duration-300",
        )}
      >
        Live Preview
        <ArrowUpRight
          className={cn(
            "h-4 w-4",
            "transition-transform duration-200 group-hover:rotate-12",
          )}
        />
      </Link>
    </div>
  );
};

export default ToggleButtonGroup;
