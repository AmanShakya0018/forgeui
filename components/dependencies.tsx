import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Dependencies = ({ children }: SectionProps) => {
  return (
    <div className="mt-6 flex flex-col gap-5 border-l border-neutral-300 dark:border-neutral-700">
      <span className="flex h-8 items-center gap-6">
        <span className="h-full w-[6px] rounded-br-full rounded-tr-full bg-neutral-300 dark:bg-neutral-700"></span>
        <span className="font-medium leading-relaxed text-black/80 dark:text-white/90">
          Install dependencies
        </span>
      </span>
      <span className="pl-7">{children}</span>
    </div>
  );
};

export default Dependencies;
