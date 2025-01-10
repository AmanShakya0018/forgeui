import React, { ReactNode } from 'react';

interface VerticalContainerProps {
  children: ReactNode;
}

const VerticalContainer = ({ children }: VerticalContainerProps) => {
  return (
    <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 py-6 gap-5">
      {children}
    </div>
  );
};

export default VerticalContainer;
