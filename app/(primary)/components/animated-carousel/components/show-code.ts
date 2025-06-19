export const title = "Animated Carousel";
export const routepoint = "animated-carousel";
export const description = "A dynamic, interactive carousel for showcasing images or content with smooth transitions and engaging animations.";

export const cliscript = "add https://forgeui.amanshakya.in/registry/animated-carousel.json";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const democode = `"use client";
import React from 'react'
import AnimatedCarousel from './components/ui/animated-carousel'
function Page() {
  return (
    <>
      <AnimatedCarousel />
    </>
  )
}

export default Page;`;

export const code = `'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AnimatedCarousel = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const items = [
    {
      img: '/photo1.jpg', title: 'Spectacular Nights', topic: 'Fireworks Display', description: 'Experience the magic of nighttime celebrations with stunning fireworks over the waterfront.'
    },
    { img: '/photo2.jpg', title: 'Interactive Design', topic: 'User Experience', description: 'Engage your audience with intuitive and responsive interfaces.' },
    { img: '/photo1.jpg', title: 'Modern Aesthetics', topic: 'Visual Appeal', description: 'Captivate users with sleek, contemporary design elements.' },
    { img: '/photo2.jpg', title: 'Performance Optimized', topic: 'Speed & Efficiency', description: 'Deliver smooth experiences with optimized performance.' },
  ]

  const handlePrev = () => {
    setDirection(-1)
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  const handleNext = () => {
    setDirection(1)
    setIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  useEffect(() => {
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  },)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      rotateY: direction < 0 ? 15 : -15,
    }),
  }

  const backgroundVariants = {
    initial: { scale: 1.1, opacity: 0, filter: 'saturate(0.8) brightness(0.6)' },
    animate: {
      scale: 1,
      opacity: 1,
      filter: 'saturate(1.2) brightness(0.5)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      scale: 1.1,
      opacity: 0,
      filter: 'saturate(0.8) brightness(0.6)',
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
  }

  return (
    <div className="h-[400px] w-full max-w-2xl mx-auto overflow-hidden relative rounded-lg shadow-xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={items[index].img}
            alt={\`Carousel-\${index}\`}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 0.3 }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-xl w-full px-4 text-white z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="text-lg md:text-2xl font-bold mb-1"
            >
              {items[index].title}
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="text-xl md:text-3xl text-yellow-400 font-black mb-2"
            >
              {items[index].topic}
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="text-sm md:text-base mb-4 text-gray-200 max-w-md"
            >
              {items[index].description}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {items.map((_, i) => (
            <motion.div
              key={i}
              className={\`h-2 rounded-full cursor-pointer transition-all duration-300 \${i === index ? 'bg-yellow-400 w-6' : 'bg-gray-400/60 w-2 hover:bg-gray-300'}\`}
              initial={false}
              animate={i === index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.7 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-[94%] left-3 transform -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-300"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[94%] right-3 transform -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-300"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

export default AnimatedCarousel`;