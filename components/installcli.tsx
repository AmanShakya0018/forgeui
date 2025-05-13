import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

const InstallCli = ({ children }: SectionProps) => {
  return (
    <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 gap-5 mt-6">
      <span className="flex h-8 items-center gap-6">
        <span className="bg-neutral-300 dark:bg-neutral-700 w-[6px] h-full rounded-tr-full rounded-br-full"></span>
        <span className="font-heading scroll-m-20 text-lg font-semibold tracking-tight text-black dark:text-neutral-200">
          Run the following command
        </span>
      </span>
      <span className="pl-7">{children}</span>
    </div>
  );
};

export default InstallCli;
