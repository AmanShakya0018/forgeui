import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface PreviewComponentContainerProps {
  children: ReactNode;
  className?: string;
}

const PreviewComponentContainer = ({
  children,
  className,
}: PreviewComponentContainerProps) => {
  return (
    <div
      className={cn(
        "mt-0.5 flex min-h-88 flex-wrap items-center justify-center space-x-2 overflow-hidden rounded-xl bg-transparent px-2 py-6 sm:px-10 sm:py-12",
        "shadow-sm ring-1 shadow-black/8 ring-black/8 dark:shadow-none dark:ring-neutral-800/60",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PreviewComponentContainer;
