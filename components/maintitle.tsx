import React from "react";

interface MainTitleProps {
  title: string;
  description: string;
}

const MainTitle = ({ title, description }: MainTitleProps) => {
  return (
    <>
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
        <div className="text-foreground">{title}</div>
      </div>
      <h1 id="preview" className="mb-3 text-3xl font-bold sm:text-4xl">
        {title}
      </h1>
      <p className="mt-0 text-neutral-500 dark:text-zinc-400">{description}</p>
    </>
  );
};

export default MainTitle;
