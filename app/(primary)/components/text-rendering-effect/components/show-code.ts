export const title = "Text Rendering Effect";
export const routepoint = "text-rendering-effect";
export const description = "A stylish effect that sequentially fades in text on page load, creating a dynamic reveal.";

export const cliscript = "add https://forgeui.amanshakya.in/registry/text-rendering-effect.json";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const democode = `"use client";
import React from 'react'
import  TextRenderingEffect from './components/ui/text-rendering-effect';
function Page() {
  return (
    <>
      <TextRenderingEffect />
    </>
  )
}

export default Page;`;

export const code = `"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

const words = \`TypeScript is a superset of JavaScript that adds static typing, enabling better error detection and improved code quality. It provides enhanced development experience with features like interfaces, generics, and type inference, making it ideal for large-scale applications and teams.
\`;

export default function TextRenderingEffect() {
  return (
    <TextRenderEffect words={words} />
  );
}

const TextRenderEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        x: 0,
        y: 0,
        letterSpacing: "normal",
      },
      {
        duration: duration ? duration : 0.6,
        delay: stagger(0.06),
        ease: "easeOut",
      }
    );
  },);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0 inline-block"
              style={{
                x: filter ? "-5px" : "0px",
                y: filter ? "12px" : "0px",
                letterSpacing: filter ? "-0.05em" : "normal",
                marginRight: "0.25rem",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};`;