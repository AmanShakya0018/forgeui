import React, { ReactNode } from "react";

interface VerticalContainerProps {
  children: ReactNode;
}

const VerticalContainer = ({ children }: VerticalContainerProps) => {
  return (
    <div className="flex flex-col gap-5 border-l border-neutral-300 pt-6 dark:border-neutral-700">
      {children}
    </div>
  );
};

export default VerticalContainer;
