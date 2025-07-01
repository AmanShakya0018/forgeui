import React from "react";
import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

const Herobuttons = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
      <Link href="/components/animated-form">
        <div className="group relative z-20 flex h-9 w-full cursor-pointer items-center justify-center gap-1 rounded-lg bg-neutral-300 px-4 py-1.5 text-[0.9rem] font-semibold text-black no-underline transition-all duration-300 hover:bg-white md:h-10 md:rounded-xl md:px-5 md:py-2 md:text-[1rem]">
          Browse Components
        </div>
      </Link>

      <Link
        href="/docs/introduction"
        className="group flex items-center gap-1.5 text-[0.75rem] text-white md:gap-2 md:text-[1rem]"
      >
        <BookOpen className="h-3.5 w-3.5 translate-y-[1px] md:h-4 md:w-4" />
        Documentation
        <ChevronRight className="mt-0.5 h-3.5 w-3.5 transition-all duration-200 ease-in-out group-hover:translate-x-2 md:h-4 md:w-4 md:group-hover:translate-x-3" />
      </Link>
    </div>
  );
};

export default Herobuttons;
