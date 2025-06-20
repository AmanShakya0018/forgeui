import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface SectionProps {
  step?: number;
  title?: string;
  children?: ReactNode;
}

const Dependencies = ({ step, title, children }: SectionProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
        <span className="font-semibold text-primary">{step}</span>
      </div>
      <div
        className={cn(
          "ml-[1.1rem]",
          children && "border-l border-neutral-200 dark:border-neutral-900",
        )}
      >
        <div className="space-y-4 pb-8 pl-8 pt-1">
          <h2 className="font-medium text-primary/90">{title}</h2>
          <span className="pl-7">{children}</span>
        </div>
      </div>
    </div>
  );
};

export default Dependencies;
