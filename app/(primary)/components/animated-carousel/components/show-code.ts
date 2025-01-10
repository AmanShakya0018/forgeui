export const title = "Animated Carousel";
export const routepoint = "animated-carousel";
export const description = "A dynamic, interactive carousel for showcasing images or content with smooth transitions and engaging animations.";

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
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const AnimatedCarousel = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const items = [
    {
      img: '/image.jpg', title: 'Spectacular Nights', topic: 'Fireworks Display', description: 'Experience the magic of nighttime celebrations with stunning fireworks over the waterfront.'
    },
    { img: '/image.jpg', title: 'Interactive Design', topic: 'User Experience', description: 'Engage your audience with intuitive and responsive interfaces.' },
    { img: '/image.jpg', title: 'Modern Aesthetics', topic: 'Visual Appeal', description: 'Captivate users with sleek, contemporary design elements.' },
    { img: '/image.jpg', title: 'Performance Optimized', topic: 'Speed & Efficiency', description: 'Deliver smooth experiences with optimized performance.' },
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
    const interval = setInterval(handleNext, 5000) //slide changes every 5 sec
    return () => clearInterval(interval)
  },)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  }

  const backgroundVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 },
  }

  return (
    <div className="h-[400px] w-full max-w-2xl mx-auto overflow-hidden relative rounded-lg shadow-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.75 }}
          className="absolute inset-0"
        >
          <Image
            src={items[index].img}
            alt={\`Carousel-\${index}\`}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
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
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-xl w-full px-4 text-white z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-2xl font-bold mb-1"
            >
              {items[index].title}
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-3xl text-yellow-400 font-black mb-2"
            >
              {items[index].topic}
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm md:text-base mb-4"
            >
              {items[index].description}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {items.map((_, i) => (
            <motion.div
              key={i}
              className={\`w-2 h-2 rounded-full \${i === index ? 'bg-white' : 'bg-gray-500'}\`}
              initial={false}
              animate={i === index ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-[94%] left-6 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-1 transition-colors duration-300"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[94%] right-6 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-1 transition-colors duration-300"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

export default AnimatedCarousel

`;