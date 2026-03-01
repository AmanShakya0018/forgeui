export const title = "Text Morph";
export const routepoint = "text-morph";
export const description = "A React component that animates rotating text characters using Motion, customizable by words, interval, styling, and animation timing.";

export const cliscript = "add @forgeui/text-morph";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

const packagescript = "motion clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const textMorphProps = [
  {
    prop: "words",
    type: "string[]",
    default: '["engineer","developer","designer"]',
    description:
      "Array of words that will rotate and animate letter-by-letter.",
  },
  {
    prop: "interval",
    type: "number",
    default: "2500",
    description:
      "Time (in milliseconds) between each word transition.",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description:
      "Optional Tailwind class names applied to the wrapper element.",
  },
  {
    prop: "charClassName",
    type: "string",
    default: "-",
    description:
      "Optional Tailwind class names applied to each character.",
  },
];

export const democode = `import TextMorph from '@/components/forgeui/text-morph';

export function ${title.replace(/\s+/g, "")}Example() {
  return (
    <p className="flex items-center gap-1 text-neutral-800 dark:text-neutral-200">
      20 •
      <TextMorph
        words={["engineer", "developer", "designer"]}
        interval={2500}
        className="text-neutral-800 dark:text-neutral-200"
      />
    </p>
  )
}
`;

export const code = `"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type TextMorphProps = {
  words?: string[];
  interval?: number;
  className?: string;
  charClassName?: string;
};

const defaultWords = ["engineer", "developer", "designer"];

export function TextMorph({
  words = defaultWords,
  interval = 2500,
  className,
  charClassName,
}: TextMorphProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const chars = useMemo(() => {
    return Array.from(words[index] ?? "");
  }, [index, words]);

  if (!words.length) return null;

  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={index}
        className={\`flex gap-[0.5px] overflow - hidden \${ className ?? "" } \`}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.4 }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className={charClassName}
            initial={{ opacity: 0, y: 5, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -5, filter: "blur(5px)" }}
            transition={{
              delay: i * 0.03,
              duration: 0.3,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
}
`;