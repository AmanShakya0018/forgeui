"use client"
import { cn } from '@/lib/utils';
import { ArrowUpRight, Code2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ToggleButtonGroupProps {
  routepoint: string;
  sourceCode: boolean;
  setSourceCode: (value: boolean) => void;
}

const ToggleButtonGroup = ({ sourceCode, setSourceCode, routepoint }: ToggleButtonGroupProps) => {
  return (
    <div className="flex flex-col xs:flex-row xs:justify-between gap-2 mt-12 mb-4 border-b border-zinc-200 dark:border-zinc-800">
      <div className='flex flex-row gap-2'>
        <button
          className={`inline-flex items-center justify-center gap-1.5 relative h-9 rounded-none border-b-2 px-4 pb-3 pt-2 font-medium text-sm transition-colors
          ${!sourceCode
              ? "border-b-primary dark:text-white text-zinc-950 duration-300"
              : "border-b-transparent text-neutral-500 dark:text-neutral-400"
            }`}
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
          className={`inline-flex items-center justify-center gap-1.5 relative h-9 rounded-none border-b-2 px-4 pb-3 pt-2 font-medium text-sm transition-colors
          ${sourceCode
              ? "border-b-primary dark:text-white text-zinc-950 duration-300"
              : "border-b-transparent text-neutral-500 dark:text-neutral-400"
            }`}
          onClick={() => setSourceCode(true)}
        >
          <Code2 className="h-4 w-4" />
          <span>Code</span>
        </button>
      </div>
      <Link
        href={`/preview/${routepoint}`}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "hidden xs:flex items-center gap-2 pb-2 pr-1",
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
