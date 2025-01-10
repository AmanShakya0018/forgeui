"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import TrialAlert from './components/trialalert';
import Dependencies from '@/components/dependencies';

const Trialalert = () => {

  const title = "Trial Alert";
  const routepoint = "trial-alert";
  const description = "A sleek notification component prompting users to upgrade their plan for enhanced features and uninterrupted access.";
  const [sourceCode, setSourceCode] = useState(false);

  const democode = `"use client";
import React from 'react'
import TrialAlert from './components/ui/trial-alert';
function Page() {
  return (
    <>
      <TrialAlert />
    </>
  )
}

export default Page;`;

  const code = `"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LockIcon } from 'lucide-react'

export default function TrialAlert() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm mx-auto"
    >
      <div className="bg-white dark:bg-zinc-900/95 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center gap-4 p-8 shadow-lg border border-gray-200 dark:border-zinc-700">
        <motion.div
          animate={{ rotate: isHovered ? [0, -5, 5, -5, 5, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          <LockIcon className="w-12 h-12 text-yellow-500 dark:text-yellow-400" />
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">
          ACCESS LIMITED
        </h2>
        <p className="text-center text-base text-gray-600 dark:text-gray-300 mb-4">
          Upgrade your plan today to unlock all features and enjoy uninterrupted access.
        </p>
        <Button
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          <span className="relative z-10 text-sm">
            Upgrade Now
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500"
            initial={{ x: "100%" }}
            animate={{ x: isHovered ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
          />
        </Button>
      </div>
    </motion.div>
  )
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
          <TrialAlert />
        </div>)
        : (<CodeBlock
          language="jsx"
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

export default Trialalert