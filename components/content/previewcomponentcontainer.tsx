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
        "mt-0.5 flex min-h-88 flex-wrap items-center justify-center space-x-2 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-2 py-6 shadow-xs shadow-black/10 sm:px-10 sm:py-12 dark:border-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PreviewComponentContainer;
