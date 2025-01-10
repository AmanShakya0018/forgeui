import React, { ReactNode } from 'react';

interface PreviewComponentContainerProps {
  children: ReactNode;
}

const PreviewComponentContainer = ({ children }: PreviewComponentContainerProps) => {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 px-10 py-12 mt-[2px] bg-transparent rounded-md shadow-md flex justify-center items-center space-x-2 overflow-hidden flex-wrap min-h-[22rem]">
      {children}
    </div>
  );
};

export default PreviewComponentContainer;
