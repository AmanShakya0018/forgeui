export const title = "Text Shimmer";
export const routepoint = "text-shimmer";
export const description = "A React component that creates an animated text shimmer effect using Framer Motion, customizable by tag, duration, and spread.";

export const democode = `"use client";
import React from 'react'
import  TextShimmer from './components/ui/text-shimmer';
function Page() {
  return (
    <TextShimmer className='text-sm' duration={1}>
      Loading...
    </TextShimmer>
  )
}

export default Page;`;

export const code = `'use client';
import React, { useMemo, type JSX } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextShimmerProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
}

export function TextShimmer({
  children,
  as: Component = 'p',
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const MotionComponent = motion(Component as keyof JSX.IntrinsicElements);

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <MotionComponent
      className={cn(
        'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',
        'text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]',
        '[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]',
        'dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
        className
      )}
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
      style={
        {
          '--spread': \`\${dynamicSpread}px\`,
          backgroundImage: \`var(--bg), linear-gradient(var(--base-color), var(--base-color))\`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
}
`;