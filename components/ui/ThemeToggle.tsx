"use client";

import * as React from "react";
import { RxMoon, RxSun } from "react-icons/rx";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Themetoggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key.toLowerCase() === "d") {
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          <button
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-900",
            )}
            onClick={toggleTheme}
          >
            <RxMoon className="hidden h-4.5 w-4.5 dark:block" />
            <RxSun className="block h-4.5 w-4.5 dark:hidden" />
          </button>
        </TooltipTrigger>

        <TooltipContent side="bottom" className="flex items-center gap-2">
          Toggle mode <kbd>D</kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
