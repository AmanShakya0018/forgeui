"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export function Themetoggle() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");

    if (theme === "dark") {
      toast({
        title: 'Consider using Dark Mode',
        description: 'For the best user experience, we recommend using the dark mode.',
      });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative h-10 w-10 rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-neutral-900"
      onClick={handleClick}
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-yellow-500 hover:text-yellow-600" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-slate-700 dark:text-slate-200" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
