"use client";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Command } from "cmdk";
import { Search, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";
import {
  primaryItems,
  templates,
  eliteItems,
  backgroundItems,
} from "@/contants";

const DocumentSearch = () => {
  const sortedPrimaryItems = [...primaryItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const sortedEliteItems = [...eliteItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const sortedBackgroundItems = [...backgroundItems].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    } else {
      setQuery("");
    }
  }, [open]);

  const groups = [
    {
      title: "Templates",
      items: templates.map((item) => ({
        id: item.name,
        title: item.name,
        onSelect: () => {
          window.location.href = item.href;
        },
      })),
    },
    {
      title: "Featured Components",
      items: sortedEliteItems.map((item) => ({
        id: item.name,
        title: item.name,
        onSelect: () => {
          window.location.href = item.href;
        },
      })),
    },
    {
      title: "Backgrounds",
      items: sortedBackgroundItems.map((item) => ({
        id: item.name,
        title: item.name,
        onSelect: () => {
          window.location.href = item.href;
        },
      })),
    },
    {
      title: "Basic Components",
      items: sortedPrimaryItems.map((item) => ({
        id: item.name,
        title: item.name,
        onSelect: () => {
          window.location.href = item.href;
        },
      })),
    },
  ];

  const handleSelect = (item: {
    id: string;
    title: string;
    onSelect?: () => void;
  }) => {
    setOpen(false);
    item.onSelect?.();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "group inline-flex items-center gap-2 whitespace-nowrap transition-all duration-200",
          "focus-visible:ring-ring/50 focus-visible:ring-2 focus-visible:outline-none",
          "disabled:pointer-events-none disabled:opacity-50",
          "border-input/50 hover:border-input hover:bg-accent/50 border",
          "bg-muted/30 relative h-9 w-full justify-start rounded-lg px-3 py-2",
          "text-muted-foreground text-sm font-normal sm:pr-12 md:w-32 lg:w-36",
        )}
      >
        <Search className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-70" />
        <span className="hidden lg:inline-flex">Search</span>
        <span className="inline-flex lg:hidden">Search</span>
        <kbd className="bg-background/80 text-muted-foreground/70 pointer-events-none absolute top-1.5 right-1.5 hidden h-6 items-center gap-0.5 rounded-md border px-1.5 font-mono text-[10px] font-medium select-none sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {typeof document !== "undefined" &&
        ReactDOM.createPortal(
          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                  onClick={() => setOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="fixed top-1/2 left-1/2 z-50 w-full max-w-170 -translate-x-1/2 -translate-y-1/2 p-4"
                >
                  <Command
                    label="Command Menu"
                    className="border-border/50 bg-popover/95 overflow-hidden rounded-2xl border shadow-2xl shadow-black/20 backdrop-blur-xl"
                    shouldFilter={true}
                  >
                    <div className="border-border/50 flex items-center gap-3 border-b px-4 py-3">
                      <div className="from-primary/20 to-primary/5 flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br">
                        <Search className="text-primary h-4 w-4" />
                      </div>
                      <Command.Input
                        ref={inputRef}
                        value={query}
                        onValueChange={setQuery}
                        placeholder="Type a command or search..."
                        className="placeholder:text-muted-foreground/60 flex-1 bg-transparent text-base font-normal outline-none"
                        autoFocus
                      />
                      {query && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          onClick={() => setQuery("")}
                          className="text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-1 text-xs transition-colors"
                        >
                          Clear
                        </motion.button>
                      )}
                      <kbd className="bg-muted/50 text-muted-foreground hidden h-6 items-center gap-1 rounded-md border px-2 font-mono text-[10px] font-medium sm:inline-flex">
                        ESC
                      </kbd>
                    </div>

                    <Command.List className="max-h-100 overflow-y-auto overscroll-contain p-2">
                      <Command.Empty className="flex flex-col items-center justify-center py-14 text-center">
                        <div className="bg-muted/50 mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                          <Search className="text-muted-foreground/50 h-5 w-5" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          No results found
                        </p>
                        <p className="text-muted-foreground/60 text-xs">
                          Try searching for something else
                        </p>
                      </Command.Empty>

                      {groups.map((group) => (
                        <Command.Group
                          key={group.title}
                          heading={group.title}
                          className="**:[[cmdk-group-heading]]:text-muted-foreground/60 **:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-semibold **:[[cmdk-group-heading]]:tracking-wider **:[[cmdk-group-heading]]:uppercase"
                        >
                          {group.items.map((item) => (
                            <Command.Item
                              key={item.id}
                              value={`${group.title} ${item.title}`}
                              onSelect={() => handleSelect(item)}
                              className="group/item hover:bg-accent/70 hover:text-accent-foreground aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors outline-none select-none data-[disabled='true']:pointer-events-none data-[disabled='true']:opacity-50"
                            >
                              <div className="flex flex-1 flex-col gap-0.5">
                                <span className="font-medium">
                                  {item.title}
                                </span>
                                <span className="text-muted-foreground/60 text-xs">
                                  {group.title}
                                </span>
                              </div>
                              <ArrowRight className="text-muted-foreground h-4 w-4 -translate-x-2 opacity-0 transition-all group-aria-selected/item:translate-x-0 group-aria-selected/item:opacity-100" />
                            </Command.Item>
                          ))}
                        </Command.Group>
                      ))}
                    </Command.List>

                    <div className="border-border/50 bg-muted/30 flex items-center justify-between border-t px-4 py-2.5">
                      <div className="text-muted-foreground/60 flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1.5">
                          <kbd className="bg-background/80 rounded border px-1.5 py-0.5 font-mono text-[10px]">
                            ↑↓
                          </kbd>
                          Navigate
                        </span>
                        <span className="flex items-center gap-1.5">
                          <kbd className="bg-background/80 rounded border px-1.5 py-0.5 font-mono text-[10px]">
                            ↵
                          </kbd>
                          Select
                        </span>
                      </div>
                      <span className="text-muted-foreground/40 text-xs">
                        ForgeUI
                      </span>
                    </div>
                  </Command>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default DocumentSearch;
