export const title = "Circular Text";
export const routepoint = "circular-text";
export const description = "CircularText animates text in a spinning circle, creating a smooth and visually engaging motion effect.";

export const cliscript = "npx shadcn@latest add \"https://forgeui.amanshakya.in/registry/circular-text.json\"";

export const democode = `"use client";
import React from 'react'
import CircularText from './components/ui/circular-text';
function Page() {
  return (
    <>
      <CircularText
        text="FORGEUI*IS*AWESOME*"
      />
    </>
  )
}

export default Page;`;

export const code = `"use client"
import type React from "react"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

interface CircularTextProps {
  text: string
  spinDuration?: number
  className?: string
}

const getRotationTransition = (duration: number, from: number, loop = true) => ({
  from: from,
  to: from + 360,
  ease: "linear",
  duration: duration,
  type: "tween",
  repeat: loop ? Number.POSITIVE_INFINITY : 0,
})

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
})

const CircularText: React.FC<CircularTextProps> = ({ text, spinDuration = 20, className = "" }) => {
  const letters = Array.from(text)
  const controls = useAnimation()
  const [currentRotation, setCurrentRotation] = useState(0)

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      transition: getTransition(spinDuration, currentRotation),
    })
  }, [spinDuration, controls, text, currentRotation])

  return (
    <motion.div
      initial={{ rotate: 0 }}
      className={\`mx-auto rounded-full w-[200px] h-[200px] text-white font-black text-center origin-center \${className}\`}
      animate={controls}
      onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
    >
      {letters.map((letter, i) => {
        const rotation = (360 / letters.length) * i
        const factor = Number((Math.PI / letters.length).toFixed(0))
        const x = factor * i
        const y = factor * i
        const transform = \`rotateZ(\${rotation}deg) translate3d(\${x}px, \${y}px, 0)\`

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        )
      })}
    </motion.div>
  )
}

export default CircularText`;