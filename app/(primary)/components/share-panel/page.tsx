"use client"
import { CodeBlock } from '@/components/ui/code-block';
import React, { useState } from 'react'
import SharePanel from './components/sharepanel';

const Sharepanel = () => {

  const title = "Share Panel";
  const routepoint = "share-panel";
  const description = "A dynamic share button that reveals social media icons with smooth hover transitions and animations.";
  const [sourceCode, setSourceCode] = useState(false);

  const democode = `"use client";
import React from 'react'
import  SharePanel from './components/ui/share-panel';
function Page() {
  return (
    <>
      <SharePanel />
    </>
  )
}

export default Page;`;

  const code = `"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Twitter, Instagram, Linkedin, Link } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const shareButtons = [
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
  { icon: Link, label: "Copy Link" },
];

export default function SharePanel({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipProvider>
      <div
        className={cn(
          "relative",
          "w-[160px]", // Set width based on 4 icons (40px each)
          "h-10",
          "overflow-hidden",
          "rounded-full"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          className={cn(
            "absolute inset-0 w-full h-full",
            "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600",
            "hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700",
            "text-white font-semibold",
            "border border-emerald-500",
            "transition-all duration-500 ease-in-out",
            "shadow-lg hover:shadow-xl shadow-emerald-200/50",
            isHovered ? "opacity-0" : "opacity-100",
            className
          )}
          {...props}
        >
          <span className="flex items-center gap-2">
            <Link className="w-4 h-4 animate-pulse" />
            <span className="relative">
              <span className="tracking-wide">Share</span>
            </span>
          </span>
        </Button>

        <div className="absolute inset-0 flex">
          {shareButtons.map((button, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "h-full w-10",
                    "flex items-center justify-center",
                    "bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-500",
                    "text-white",
                    "transition-all duration-500 ease-in-out",
                    "border border-emerald-300",
                    "hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700",
                    "shadow-md hover:shadow-lg shadow-emerald-200/50",
                    index !== 0 && "border-l-0",
                    isHovered
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95",
                    \`transition-all duration-500 delay-[\${index * 75}ms]\`
                  )}
                >
                  <button.icon className="w-4 h-4 transition-transform duration-300 ease-in-out hover:scale-110" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">{button.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
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
          <SharePanel />
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
          <CodeBlock code={`npm install lucide-react`} language="javascript" />
        </span>
      </div>
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

export default Sharepanel