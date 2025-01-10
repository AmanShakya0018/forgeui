import React, { ReactNode } from 'react';

interface RoutePlaceHolderProps {
  children: ReactNode;
}

const RoutePlaceHolder = ({ children }: RoutePlaceHolderProps) => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 rounded ml-7 inline-flex max-w-max">
      <span className="text-[0.8rem] font-normal tracking-wider px-[0.3rem] py-[0.2rem] text-neutral-800 dark:text-neutral-300">
        {children}
      </span>
    </div>
  );
};

export default RoutePlaceHolder;
