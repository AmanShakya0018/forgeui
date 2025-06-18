import React from "react";
import Link from "next/link";
import { BookOpen, ChevronRight, SquareArrowOutUpRight } from "lucide-react";

const Herobuttons = () => {
  return (
    <div className="mt-4 flex items-center gap-4 sm:mt-6 sm:gap-6">
      <Link href="/components/alerts">
        <div className="duration-400 group relative z-20 flex h-10 w-full cursor-pointer items-center justify-center gap-1 space-x-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white no-underline transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 md:gap-3">
          Browse Components
          <SquareArrowOutUpRight className="mt-0.5 h-4 w-4" />
        </div>
      </Link>
      <Link
        href="/docs/introduction"
        className="group flex items-center gap-2 text-[0.83rem] text-black dark:text-white md:text-[0.9rem]"
      >
        <BookOpen className="h-4 w-4 translate-y-[1px]" />
        Documentation
        <ChevronRight className="mt-0.5 h-4 w-4 transition-all duration-200 ease-in-out group-hover:translate-x-3" />
      </Link>
    </div>
  );
};

export default Herobuttons;
