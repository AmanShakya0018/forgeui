import React, { ReactNode } from "react";

interface ContentNavigationProps {
  children: ReactNode;
}

const ContentNavigation = ({ children }: ContentNavigationProps) => {
  return (
    <div className="mb-8 flex items-center space-x-1 text-sm leading-none text-neutral-500 dark:text-zinc-400">
      <div className="truncate">Components</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-right h-3.5 w-3.5"
      >
        <path d="m9 18 6-6-6-6"></path>
      </svg>
      <div className="text-foreground">{children}</div>
    </div>
  );
};

export default ContentNavigation;
