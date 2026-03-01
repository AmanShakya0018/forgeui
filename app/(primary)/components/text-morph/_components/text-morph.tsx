"use client";

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
        className={`flex gap-[0.5px] overflow-hidden ${className ?? ""}`}
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
