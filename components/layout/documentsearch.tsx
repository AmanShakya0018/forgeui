"use client";
import React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { primaryItems } from "@/contants";
import { eliteItems } from "@/contants";

const DocumentSearch = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const sortedEliteItems = [...eliteItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        className="relative flex w-fit items-center justify-start rounded-lg border border-transparent bg-white/50 py-1.5 pl-4 pr-2 text-sm text-zinc-500 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black/50 dark:text-zinc-400"
        onClick={() => setOpen(true)}
      >
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
          className="h-4 w-4 text-neutral-500"
        >
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
        <span className="pl-2 pr-8 text-xs font-normal text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm">
          Search <span className="hidden xl:inline-block">Components</span>
        </span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-zinc-100 px-1.5 font-mono text-[10px] font-medium opacity-100 dark:bg-zinc-800 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Featured Components" className="mb-5 mt-2">
            <CommandSeparator />
            {sortedEliteItems.map((item) => (
              <a href={item.href} key={item.name}>
                <CommandItem>{item.name}</CommandItem>
              </a>
            ))}
          </CommandGroup>
          <CommandGroup heading="Basic Components" className="my-2">
            <CommandSeparator />
            {sortedPrimaryItems.map((item) => (
              <a href={item.href} key={item.name}>
                <CommandItem>{item.name}</CommandItem>
              </a>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default DocumentSearch;
