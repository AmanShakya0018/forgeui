import React, { ReactNode } from "react";

interface PreviewComponentContainerProps {
  children: ReactNode;
}

const PreviewComponentContainer = ({
  children,
}: PreviewComponentContainerProps) => {
  return (
    <div className="mt-[2px] flex min-h-[22rem] flex-wrap items-center justify-center space-x-2 overflow-hidden rounded-md border border-zinc-200 bg-transparent px-2 py-6 shadow-md dark:border-zinc-800 sm:px-10 sm:py-12">
      {children}
    </div>
  );
};

export default PreviewComponentContainer;
