"use client"
import React from 'react';

interface ToggleManualCliProps {
  sourceManual: boolean;
  setSourceManual: (value: boolean) => void;
}

const ToggleManualCli = ({ sourceManual, setSourceManual }: ToggleManualCliProps) => {
  return (
    <div className="flex flex-col xs:flex-row xs:justify-between gap-2 mt-6 mb-4 border-b border-zinc-200 dark:border-zinc-800">
      <div className='flex flex-row gap-2'>
        <button
          className={`inline-flex items-center justify-center gap-1.5 relative h-9 rounded-none border-b-2 px-4 pb-3 pt-2 font-medium text-sm transition-colors
          ${!sourceManual
              ? "border-b-primary dark:text-white text-zinc-950 duration-300"
              : "border-b-transparent text-neutral-500 dark:text-neutral-400"
            }`}
          onClick={() => setSourceManual(false)}
        >
          <span>CLI</span>
        </button>
        <button
          className={`inline-flex items-center justify-center gap-1.5 relative h-9 rounded-none border-b-2 px-4 pb-3 pt-2 font-medium text-sm transition-colors
          ${sourceManual
              ? "border-b-primary dark:text-white text-zinc-950 duration-300"
              : "border-b-transparent text-neutral-500 dark:text-neutral-400"
            }`}
          onClick={() => setSourceManual(true)}
        >
          <span>Manual</span>
        </button>
      </div>
    </div>
  );
};

export default ToggleManualCli;
