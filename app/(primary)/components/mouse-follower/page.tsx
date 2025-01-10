"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import MouseFollower from './components/page';
import Dependencies from '@/components/dependencies';


const Mousefollower = () => {

  const title = "Mouse Follower";
  const routepoint = "mouse-follower";
  const description = "The Mouse Follower Element dynamically tracks and follows the user's mouse movements for interactive engagement.";
  const [sourceCode, setSourceCode] = useState(false);

  const democode = `"use client";
import React from 'react'
import MouseFollower from './components/ui/mouse-follower'
function Page() {
  return (
    <>
      <MouseFollower />
    </>
  )
}

export default Page;`;

  const code = `'use client';

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
          <MouseFollower />
          <p className='text-xs sm:text-[15px]'>Mouse Follower is activated, allowing interaction with the mouse to observe dynamic effects in real time.</p>
        </div>)
        : (<CodeBlock
          language="tsx"
          code={democode}
        />)}
      <h2 className="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-black dark:text-white">Installation</h2>

      <Dependencies><CodeBlock code={`npm install framer-motion`} language="javascript" /></Dependencies>
      <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 py-6 gap-5">
        <span className='flex h-8 items-center gap-6'>
          <span className='bg-neutral-300 dark:bg-neutral-700 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
          <span className='font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200'>Copy the source code</span>
        </span>
        <div
          className='bg-zinc-100 dark:bg-zinc-800 rounded ml-7 inline-flex max-w-max'>
          <span
            className='text-[0.8rem] font-normal tracking-wider px-[0.3rem] py-[0.2rem] text-neutral-800 dark:text-neutral-300'>
            components/ui/{routepoint}.tsx
          </span>
        </div>

        <span className='pl-7'>
          <CodeBlock code={code} language="javascript" />
        </span>
      </div>
    </article>
  )
}

export default Mousefollower