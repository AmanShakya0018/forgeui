export const title = "Text Shimmer";
export const routepoint = "text-shimmer";
export const description = "A React component that creates an animated text shimmer effect using Motion, customizable by tag, duration, spread, delay, and repeat delay.";

export const cliscript = "add https://forgeui.in/registry/text-shimmer.json";

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

export const shimmerProps = [
  {
    prop: "children",
    type: "string",
    default: "-",
    description: "The text content to apply the shimmer effect to.",
  },
  {
    prop: "as",
    type: "React.ElementType",
    default: "\"p\"",
    description: "The HTML tag to render (e.g., span, h1, p).",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Optional Tailwind class names to style the text.",
  },
  {
    prop: "duration",
    type: "number",
    default: "2",
    description: "Time (in seconds) for the shimmer animation to complete.",
  },
  {
    prop: "spread",
    type: "number",
    default: "2",
    description: "Controls the width of the shimmer highlight.",
  },
  {
    prop: "delay",
    type: "number",
    default: "0",
    description: "Time delay before the animation starts.",
  },
  {
    prop: "repeatDelay",
    type: "number",
    default: "0",
    description: "Delay before repeating the animation.",
  },
];



export const democode = `import TextShimmer from '@/components/forgeui/text-shimmer';

export function ${title.replace(/\s+/g, "")}Example() {
  return (
    <TextShimmer className="text-sm" duration={1.5} repeatDelay={0.5}>
      Loading...
    </TextShimmer>
  )
}
`;

export const code = `"use client";
import React, { useMemo, type JSX } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type TextShimmerProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
  delay?: number;
  repeatDelay?: number;
};

const TextShimmer = ({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
  delay = 0,
  repeatDelay = 0,
}: TextShimmerProps) => {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements,
  );

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
        "text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]",
        "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        className,
      )}
      initial={{ backgroundPosition: "105% center" }}
      animate={{ backgroundPosition: "-5% center" }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration,
        ease: "linear",
        delay,
        repeatDelay,
      }}
      style={
        {
          "--spread": \`\${dynamicSpread}px\`,
          backgroundImage: \`var(--bg), linear-gradient(var(--base-color), var(--base-color))\`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
};

export default React.memo(TextShimmer);
`;