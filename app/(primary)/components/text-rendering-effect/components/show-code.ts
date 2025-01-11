export const title = "Text Rendering Effect";
export const routepoint = "text-rendering-effect";
export const description = "A stylish effect that sequentially fades in text on page load, creating a dynamic reveal.";

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
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
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
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
`;