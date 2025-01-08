"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import AnimatedCarousel from './components/animatedcarousel';

const Animatedcarousel = () => {

  const title = "Animated Carousel";
  const routepoint = "animated-carousel";
  const description = "A dynamic, interactive carousel for showcasing images or content with smooth transitions and engaging animations.";
  const [sourceCode, setSourceCode] = useState(false);

  const democode = `"use client";
import React from 'react'
import AnimatedCarousel from './components/AnimatedCarousel'
function Page() {
  return (
    <>
      <AnimatedCarousel />
    </>
  )
}

export default Page;`;

  const code = `'use client'
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

  return (
    <article className="container lg:pl-8 py-6 max-w-6xl mx-auto">
      <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-neutral-400">
        <div className="truncate">Components</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-3.5 w-3.5"><path d="m9 18 6-6-6-6"></path></svg>
        <div className="text-foreground">{title}</div>
      </div>
      <h1 className="mb-2 text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-0 text-neutral-400">{description}</p>
      <div className="buttons flex flex-row gap-2 mt-12">
        <button className={`${!sourceCode ? ("dark:text-white text-zinc-950 bg-zinc-200 dark:bg-zinc-800 duration-400") : ("")} text-sm font-bold text-neutral-500 dark:text-neutral-400 rounded-md w-32 h-10 flex items-center justify-center space-x-1 mb-1.5`} onClick={() => setSourceCode(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M6 8h.01"></path><path d="M9 8h.01"></path></svg>
          <span>Preview</span>
        </button>
        <button className={`${sourceCode ? ("dark:text-white text-zinc-950 bg-zinc-200 dark:bg-zinc-800 duration-400") : ("")} text-sm font-bold text-neutral-500 dark:text-neutral-400 rounded-md w-32 h-10 flex items-center justify-center space-x-1 mb-1.5`} onClick={() => setSourceCode(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M8 9l3 3l-3 3"></path><path d="M13 15l3 0"></path><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path></svg>
          <span>Code</span>
        </button>
      </div>
      {(!sourceCode) ?
        (<div className="border border-zinc-200 dark:border-zinc-800 px-10 py-12 mt-[2px] bg-transparent rounded-md shadow-md flex justify-center items-center space-x-2 overflow-hidden flex-wrap min-h-[22rem]">
          <AnimatedCarousel />
        </div>)
        : (<CodeBlock
          language="jsx"
          code={democode}
        />)}
      <h2 className="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-black dark:text-white">Installation</h2>
      <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 gap-5 mt-6">
        <span className='flex h-8 items-center gap-6'>
          <span className='bg-neutral-300 dark:bg-neutral-700 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
          <span className='font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200'>Install dependencies</span>
        </span>
        <span className='pl-7'>
          <CodeBlock code={`npm install framer-motion`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 py-6 gap-5">
        <span className='flex h-8 items-center gap-6'>
          <span className='bg-neutral-300 dark:bg-neutral-700 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
          <span className='font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200'>Copy the source code</span>
        </span>
        <div
          className='bg-zinc-100 dark:bg-zinc-800 rounded ml-7 inline-flex max-w-max'>
          <span
            className='text-[0.8rem] font-normal tracking-wider px-[0.3rem] py-[0.2rem] text-neutral-800 dark:text-neutral-300'>
            components/ui/{routepoint}.jsx
          </span>
        </div>

        <span className='pl-7'>
          <CodeBlock code={code} language="javascript" />
        </span>
      </div>
    </article>
  )
}

export default Animatedcarousel