// components/Box.tsx
import React from 'react';

interface BoxProps {
  children: React.ReactNode;
}

const PreviewBox: React.FC<BoxProps> = ({ children }) => {

  return (
    <div>
      <div className="text-sm font-bold text-black dark:text-white bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-md w-32 h-10 flex items-center justify-center space-x-1 mb-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M6 8h.01"></path><path d="M9 8h.01"></path></svg>
        <span>Preview</span>
      </div>
      <div className="border border-zinc-200 dark:border-zinc-800 px-4 py-12 bg-transparent rounded-md shadow-md flex justify-center items-center space-x-2 overflow-hidden flex-wrap">
        {children}
      </div>
      <div className="text-sm font-bold text-black dark:text-white bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-md w-32 h-10 flex items-center justify-center space-x-1 mt-3 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M8 9l3 3l-3 3"></path><path d="M13 15l3 0"></path><path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path></svg>
        <span>Code</span>
      </div>
    </div>
  );
};

export default PreviewBox;
