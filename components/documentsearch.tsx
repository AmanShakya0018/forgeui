"use client"
import { useToast } from '@/hooks/use-toast';
import React from 'react';

const DocumentSearch = () => {

  const { toast } = useToast()

  const handleClick = () => {
    toast({
      title: 'Available soon',
      description: 'This feature is in development and will be available soon.'
    });
  }

  return (
    <button
      className="flex relative justify-start items-center text-sm text-zinc-500 dark:text-zinc-400 dark:border-white/[0.2] py-2 w-fit border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 rounded-xl bg-white/50 dark:bg-black/50"
      onClick={handleClick}
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
        className="h-4 w-4 text-neutral-500"
      >
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
      <span className="transition-colors hover:text-foreground/80 text-foreground/60 text-xs sm:text-sm font-medium pl-2 pr-4">
        Search <span className="hidden xl:inline-block">Components</span>
      </span>
      <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-zinc-100 dark:bg-zinc-800 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </button>
  );
};

export default DocumentSearch;
