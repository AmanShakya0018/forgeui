"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CircularProgressBarDemo() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev + 10) % 110) // Increment by 10, reset after 100
    }, 2000) // Change every 2 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-8 rounded-xl bg-background dark:bg-black  p-8">
      <div className="relative">
        <CircularProgressBar
          max={100}
          min={0}
          value={value}
          gaugePrimaryColor="rgb(16, 185, 129)"
          gaugeSecondaryColor="rgba(16, 185, 129, 0.2)"
          className="relative z-10"
        />
        <div className="absolute left-1/2 top-1/2 -z-0 size-48 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gray-500/20 blur-3xl" />
      </div>
    </div>
  )
}

interface Props {
  max: number
  value: number
  min: number
  gaugePrimaryColor: string
  gaugeSecondaryColor: string
  className?: string
}

function CircularProgressBar({
  max = 100,
  min = 0,
  value = 0,
  gaugePrimaryColor,
  gaugeSecondaryColor,
  className,
}: Props) {
  const currentPercent = Math.min(100, Math.max(0, Math.round(((value - min) / (max - min)) * 100)))

  return (
    <motion.div
      className={cn(
        "relative size-48 text-2xl font-semibold drop-shadow-2xl",
        className
      )}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <svg
        fill="none"
        className="size-full"
        strokeWidth="2"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-100 transition-opacity duration-500"
          style={{ stroke: gaugeSecondaryColor }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-100 drop-shadow-[0_0_10px_rgba(16,185,129,0.1)]"
          style={{ stroke: gaugePrimaryColor }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: currentPercent / 100 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        className="absolute inset-0 m-auto flex size-fit items-center gap-1 text-emerald-300 dark:text-emerald-200"
      >
        <motion.span
          key={currentPercent}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold tabular-nums"
        >
          {currentPercent}
        </motion.span>
        <span className="text-lg font-normal text-emerald-300 dark:text-emerald-200">%</span>
      </motion.div>
    </motion.div>
  )
}

