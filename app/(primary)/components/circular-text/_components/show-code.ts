export const title = "Circular Text";
export const routepoint = "circular-text";
export const description = "CircularText animates text in a spinning circle, creating a smooth and visually engaging motion effect.";

export const cliscript = "add https://forgeui.amanshakya.in/registry/circular-text.json";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

const packagescript = "motion";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const circularTextProps = [
  {
    prop: "text",
    type: "string",
    default: "-",
    description: "The text to arrange in a circular layout and animate.",
  },
  {
    prop: "duration",
    type: "number",
    default: "20",
    description: "Time (in seconds) it takes for one full rotation.",
  },
  {
    prop: "radius",
    type: "number",
    default: "80",
    description: "Distance (in pixels) from the center to place each character.",
  },
  {
    prop: "className",
    type: "string",
    default: "\"\"",
    description: "Optional Tailwind classes for the wrapper element.",
  },
  {
    prop: "letterClassName",
    type: "string",
    default: "\"\"",
    description: "Optional Tailwind classes for each individual character.",
  },
];


export const democode = `import CircularText from '@/components/forgeui/circular-text';

export function ${title.replace(/\s+/g, "")}Example() {
  return (
      <CircularText
        text="FORGEUI*IS*AWESOME*"
        letterClassName="font-[900]"
        radius={65}
        duration={20}
      />
  )
}
`;

export const code = `"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface CircularTextProps {
  text: string;
  duration?: number;
  radius?: number;
  className?: string;
  letterClassName?: string;
}

const CircularText = ({
  text,
  duration = 20,
  radius = 80,
  className = "",
  letterClassName = "",
}: CircularTextProps) => {
  const characters = Array.from(text);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: duration,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
      className={className}
      style={{
        position: "relative",
        width: radius * 2,
        height: radius * 2,
      }}
    >
      {characters.map((char, index) => {
        const angleStep = (360 / characters.length) * index;
        const radianAngle = (angleStep * Math.PI) / 180;
        const xPosition = Math.cos(radianAngle) * radius;
        const yPosition = Math.sin(radianAngle) * radius;
        const letterTransform = \`translate(-50%, -50%) translate(\${xPosition}px, \${yPosition}px) rotate(\${angleStep + 90}deg)\`;

        return (
          <span
            key={index}
            className={\`absolute \${letterClassName}\`}
            style={{
              transform: letterTransform,
              left: "50%",
              top: "50%",
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
`;