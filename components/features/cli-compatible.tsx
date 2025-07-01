"use client";
import React, { useMemo, type JSX } from "react";
import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import Grid from "../icons/grid";
import FeaturesContainer from "./features-container";
import { cn } from "@/lib/utils";

const CliCompatible = () => {
  return (
    <FeaturesContainer>
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium">
        <Terminal className="h-4 w-4 text-white" />
        <p className="text-white">Forge/ui CLI</p>
      </div>
      <p className="text-balance text-white/70">
        ForgeUI CLI seamlessly integrates with shadcn/ui, providing enhanced
        components and utilities to accelerate your development workflow.
      </p>

      <div className="relative mt-6">
        <Grid />
        <code className="absolute inset-0 flex items-center justify-center">
          <code className="text-sm font-medium">
            <TextShimmer duration={3} repeatDelay={0.5}>
              npx shadcn@latest add
            </TextShimmer>
          </code>
        </code>
      </div>
    </FeaturesContainer>
  );
};
const TextShimmer = ({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
  delay = 0,
  repeatDelay = 0,
}: {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
  delay?: number;
  repeatDelay?: number;
}) => {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements,
  );

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent",
        "[--base-color:#71717a]",
        "[--base-gradient-color:#ffffff]",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        "[background-repeat:no-repeat,padding-box]",
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
          "--spread": `${dynamicSpread}px`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
};

export default CliCompatible;
