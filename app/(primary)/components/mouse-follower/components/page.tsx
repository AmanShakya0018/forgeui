'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  const outerX = useSpring(mouseX, { ...smoothOptions, damping: 15 });
  const outerY = useSpring(mouseY, { ...smoothOptions, damping: 15 });

  const scale = useTransform<number, number>(
    [smoothX, smoothY],
    ([latestX, latestY]) => {
      const distance = Math.abs(latestX - mouseX.get()) + Math.abs(latestY - mouseY.get());
      return 1 + Math.min(distance * 0.002, 0.5);
    }
  );

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  },);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mix-blend-difference"
        style={{
          left: smoothX,
          top: smoothY,
          x: '-50%',
          y: '-50%',
          scale: isHovering ? 2.5 : scale,
        }}
      />
      <motion.div
        ref={cursorOuterRef}
        className="pointer-events-none fixed z-40 h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-30 blur-sm mix-blend-screen dark:mix-blend-difference"
        style={{
          left: outerX,
          top: outerY,
          x: '-50%',
          y: '-50%',
          scale: isHovering ? 3 : 1,
        }}
      />
    </>
  );
}

