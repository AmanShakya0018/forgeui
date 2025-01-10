import React from 'react'
import { CodeBlock } from './ui/code-block'

const UtilSecond = () => {
  return (
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
  )
}

export default UtilSecond