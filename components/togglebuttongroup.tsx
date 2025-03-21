"use client"
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ToggleButtonGroupProps {
  routepoint: string;
  sourceCode: boolean;
  setSourceCode: (value: boolean) => void;
}

const ToggleButtonGroup = ({ sourceCode, setSourceCode, routepoint }: ToggleButtonGroupProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-12">
      <Link
        href={`/preview/${routepoint}`}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "sm:hidden flex items-center gap-2 pl-[2px]",
          "text-sm font-medium",
          "text-zinc-800 dark:text-zinc-200",
          "hover:text-zinc-600 dark:hover:text-zinc-400",
          "transition-all duration-200 no-underline group"
        )}
      >
        Live Preview
        <ArrowUpRight
          className={cn(
            "h-4 w-4",
            "transition-transform duration-200 group-hover:rotate-12"
          )}
        />
      </Link>
      <div className='flex flex-row gap-2'>
        <button
          className={`${!sourceCode
            ? 'dark:text-white text-zinc-950 bg-zinc-200 dark:bg-zinc-800 duration-400'
            : ''
            } text-sm font-bold text-neutral-500 dark:text-neutral-400 rounded-md w-32 h-10 flex items-center justify-center space-x-1 mb-1.5`}
          onClick={() => setSourceCode(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M6 8h.01"></path>
            <path d="M9 8h.01"></path>
          </svg>
          <span>Preview</span>
        </button>
        <button
          className={`${sourceCode
            ? 'dark:text-white text-zinc-950 bg-zinc-200 dark:bg-zinc-800 duration-400'
            : ''
            } text-sm font-bold text-neutral-500 dark:text-neutral-400 rounded-md w-32 h-10 flex items-center justify-center space-x-1 mb-1.5`}
          onClick={() => setSourceCode(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M8 9l3 3l-3 3"></path>
            <path d="M13 15l3 0"></path>
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
          </svg>
          <span>Code</span>
        </button>
      </div>
      <Link
        href={`/preview/${routepoint}`}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "hidden sm:flex items-center gap-2 pb-2 pr-1",
          "text-sm font-medium",
          "text-zinc-800 dark:text-zinc-200",
          "hover:text-zinc-600 dark:hover:text-zinc-400",
          "transition-all duration-200 no-underline group"
        )}
      >
        Live Preview
        <ArrowUpRight
          className={cn(
            "h-4 w-4",
            "transition-transform duration-200 group-hover:rotate-12"
          )}
        />
      </Link>
    </div>
  );
};

export default ToggleButtonGroup;
