"use client"
import React from 'react';

interface ToggleButtonGroupProps {
  sourceCode: boolean;
  setSourceCode: (value: boolean) => void;
}

const ToggleButtonGroup = ({ sourceCode, setSourceCode }: ToggleButtonGroupProps) => {
  return (
    <div className="buttons flex flex-row gap-2 mt-12">
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
  );
};

export default ToggleButtonGroup;
