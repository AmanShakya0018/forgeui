import React, { ReactNode } from 'react';

interface PreviewComponentContainerProps {
  children: ReactNode;
}

const PreviewComponentContainer = ({ children }: PreviewComponentContainerProps) => {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 sm:px-10 px-2 py-6 sm:py-12 mt-[2px] bg-transparent rounded-md shadow-md flex justify-center items-center space-x-2 overflow-hidden flex-wrap min-h-[22rem]">
      {children}
    </div>
  );
};

export default PreviewComponentContainer;
