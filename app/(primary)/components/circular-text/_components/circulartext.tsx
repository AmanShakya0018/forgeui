"use client";
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
        const letterTransform = `translate(-50%, -50%) translate(${xPosition}px, ${yPosition}px) rotate(${angleStep + 90}deg)`;

        return (
          <span
            key={index}
            className={`absolute ${letterClassName}`}
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
