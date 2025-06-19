"use client";

import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentNavigationProps {
  previous?: { label: string; href: string };
  next?: { label: string; href: string };
}

export default function ComponentNavigation({
  previous,
  next,
}: ComponentNavigationProps) {
  const onlyPrevious = previous && !next;
  const onlyNext = next && !previous;

  return (
    <div
      className={cn(
        "mt-12 gap-3 border-t border-neutral-200 pt-8 dark:border-neutral-900 max-sm:flex-col",
        onlyPrevious || onlyNext ? "flex flex-col" : "grid grid-cols-2",
      )}
    >
      {previous && (
        <Link
          href={previous.href}
          className="group flex flex-1 flex-col gap-2 whitespace-nowrap rounded-xl border border-neutral-200 p-3.5 outline-none transition-colors hover:bg-[#eeeeee] focus-visible:border-neutral-300 dark:border-neutral-900 dark:hover:bg-[#111111] dark:focus-visible:border-neutral-800"
        >
          <div className="flex items-center gap-1 text-foreground">
            <ChevronIconGlitch />
            <span className="mb-px text-sm leading-none text-primary/80">
              Previous
            </span>
          </div>
          <span className="ml-1 text-sm font-medium leading-none text-primary">
            {previous.label}
          </span>
        </Link>
      )}

      {next && (
        <Link
          href={next.href}
          className="group flex flex-1 flex-col items-end gap-2 whitespace-nowrap rounded-xl border border-neutral-200 p-3.5 outline-none transition-colors hover:bg-[#eeeeee] focus-visible:border-neutral-300 dark:border-neutral-900 dark:hover:bg-[#111111] dark:focus-visible:border-neutral-800"
        >
          <div className="flex items-center gap-1 text-foreground">
            <span className="mb-px text-sm leading-none text-primary/80">
              Next
            </span>
            <ChevronIconGlitch direction="right" />
          </div>
          <span className="mr-1 text-sm font-medium leading-none text-primary">
            {next.label}
          </span>
        </Link>
      )}
    </div>
  );
}

function ChevronIconGlitch({
  direction = "left",
}: {
  direction?: "left" | "right";
}) {
  return (
    <div className="relative overflow-hidden font-medium">
      <span className="invisible">
        {direction === "left" ? (
          <ChevronLeftIcon size={15} />
        ) : (
          <ChevronRightIcon size={15} />
        )}
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 text-neutral-400 transition-transform duration-300 ease-in-out hover:duration-150",
          direction === "left"
            ? "group-hover:-translate-x-full"
            : "group-hover:translate-x-full",
        )}
      >
        {direction === "left" ? (
          <ChevronLeftIcon size={15} />
        ) : (
          <ChevronRightIcon size={15} />
        )}
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 text-neutral-400 transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-0",
          direction === "left" ? "translate-x-full" : "-translate-x-full",
        )}
      >
        {direction === "left" ? (
          <ChevronLeftIcon size={15} />
        ) : (
          <ChevronRightIcon size={15} />
        )}
      </span>
    </div>
  );
}
