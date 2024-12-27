// components/Box.tsx
import React from 'react';

interface BoxProps {
  children: React.ReactNode;
}

const PreviewBox: React.FC<BoxProps> = ({ children }) => {

  return (
    <div>
      <h4 className="text-xl lg:text-2xl font-bold -mb-[0.1rem] ">Preview</h4>
      <div className="border border-zinc-200 dark:border-zinc-800 px-4 py-12 bg-transparent rounded-md shadow-md flex justify-center items-center space-x-2 overflow-hidden flex-wrap">
        {children}
      </div>
    </div>
  );
};

export default PreviewBox;
