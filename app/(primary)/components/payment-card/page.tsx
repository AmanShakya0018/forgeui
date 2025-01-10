"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import PaymentCard from './components/paymentcard';
import Dependencies from '@/components/dependencies';

const Paymentcard = () => {

  const title = "Payment Card";
  const routepoint = "payment-card";
  const description = "A sleek payment card highlighting a successful transaction with smooth animations and modern design.";
  const [sourceCode, setSourceCode] = useState(false);

  const democode = `"use client";
import React from 'react'
import  PaymentCard from './components/ui/payment-card';
function Page() {
  return (
    <>
      <PaymentCard />
    </>
  )
}

export default Page;`;

  const code = `"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Banknote } from 'lucide-react';

export default function PaymentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md mx-auto"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className={cn(
          "relative overflow-hidden",
          "bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50",
          "dark:from-emerald-900/50 dark:via-teal-900/50 dark:to-green-900/50",
          "border border-emerald-200/50 dark:border-emerald-700/30",
          "shadow-xl shadow-emerald-500/10 dark:shadow-emerald-500/5",
          "p-6 rounded-3xl"
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        />
        <div className="relative flex items-start gap-4">
          <motion.div
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1
            }}
            className="flex-shrink-0"
          >
            <div
              className={cn(
                "w-16 h-16 rounded-xl overflow-hidden",
                "bg-gradient-to-br from-emerald-400 to-green-500",
                "flex items-center justify-center",
                "shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20",
                "relative"
              )}
            >
              <div className="absolute inset-0 bg-emerald-600 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "10px 10px"
                }}
              />
              <div className="relative z-10 transform -rotate-12">
                <Banknote className="h-8 w-8 text-white" />
              </div>
            </div>
          </motion.div>

          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="flex flex-col gap-2">
                <div className="block sm:flex items-center justify-between">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-[0.8rem] ml-2 mb-1 sm:mb-0 sm:ml-0 sm:text-xl font-bold text-emerald-950 dark:text-emerald-100"
                  >
                    Transaction Successful
                  </motion.h3>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="px-3 py-1.5 rounded-full text-sm font-bold bg-white/90 dark:bg-white/10 text-emerald-600 dark:text-emerald-300 backdrop-blur-sm shadow-sm"
                  >
                    $3,800.00
                  </motion.span>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="hidden sm:block text-sm text-emerald-700 dark:text-emerald-300"
                >
                  Your transaction has been successfully
                  completed and credited to your account.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
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
          <PaymentCard />
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
          <span className='font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200'>Add util file</span>
        </span>
        <div
          className='bg-zinc-100 dark:bg-zinc-800 rounded ml-7 inline-flex max-w-max'>
          <span
            className='text-[0.8rem] font-normal tracking-wider px-[0.3rem] py-[0.2rem] text-neutral-800 dark:text-neutral-300'>
            lib/util.ts
          </span>
        </div>

        <span className='pl-7'>
          <CodeBlock code={`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`} language="javascript" />
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

export default Paymentcard