export const title = "Text Reveal";
export const routepoint = "text-reveal";
export const description = "A stylish effect that sequentially fades in text on page load, creating a dynamic reveal.";

export const cliscript = "add https://forgeui.in/registry/text-reveal.json";

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

export const textRevealProps = [
  {
    prop: "text",
    type: "string",
    default: "-",
    description: "The text content to reveal with the animation.",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Optional Tailwind CSS classes to style the wrapper element.",
  },
  {
    prop: "filter",
    type: "boolean",
    default: "true",
    description:
      "Applies a blur effect that transitions during the reveal animation.",
  },
  {
    prop: "duration",
    type: "number",
    default: "0.5",
    description: "Animation duration (in seconds) for each word.",
  },
  {
    prop: "staggerDelay",
    type: "number",
    default: "0.2",
    description: "Delay between each word's animation start time.",
  },
];


export const democode = `import TextReveal from '@/components/forgeui/text-reveal';

const text = \`ForgeUI is a beautifully designed component library built with Tailwind CSS and Motion.\nIt helps developers build modern, animated UIs faster, with consistent styling and production-ready components.
\`;

export function ${title.replace(/\s+/g, "")}Example() {

  return (
      <TextReveal
        staggerDelay={0.2}
        text={text}
       className="mx-auto max-w-3xl text-lg font-semibold"
      />
  )
}
`;

export const code = `"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

const TextReveal = ({
  text,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.2,
}: {
  text: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const textArray = text.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(staggerDelay),
        ease: "easeOut",
      },
    );
  }, [animate, duration, filter, staggerDelay]);

  return (
    <div className={cn("leading-[1.5]", className)}>
      <motion.div ref={scope}>
        {textArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="inline-block"
              style={{
                filter: filter ? "blur(8px)" : "none",
                marginRight: "0.25rem",
                opacity: 0,
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TextReveal;
`;