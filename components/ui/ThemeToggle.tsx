"use client";

import * as React from "react";
import { RxMoon, RxSun } from "react-icons/rx";
import { useTheme } from "next-themes";
import { toast } from "@/hooks/use-toast";

export function Themetoggle() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");

    if (theme === "dark") {
      toast({
        title: "Consider using Dark Mode",
        description:
          "For the best user experience, we recommend using the dark mode.",
      });
    }
  };

  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-900"
      onClick={handleClick}
    >
      {theme === "dark" ? (
        <RxMoon className="h-[18px] w-[18px]" />
      ) : (
        <RxSun className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
