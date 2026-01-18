"use client";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { FaStar, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function GithubLink() {
  return (
    <Link
      href="https://github.com/AmanShakya0018/forgeui"
      target="_blank"
      aria-label="Star ForgeUI on GitHub"
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-xl",
        "bg-transparent text-black dark:text-white",
        "hover:bg-neutral-100 dark:hover:bg-neutral-900",
        "transition-all duration-200 hover:scale-105",
      )}
    >
      <FaGithub className="h-[18px] w-[18px]" />

      <span className={cn("absolute bottom-0 right-0")}>
        <FaStar className="h-3 w-3 animate-bounce text-yellow-400 dark:text-yellow-500" />
      </span>
    </Link>
  );
}

export function TwitterLink() {
  return (
    <Link
      href={"https://x.com/AmanShakya0018"}
      target="_blank"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-900",
      )}
    >
      <FaXTwitter className="h-[18px] w-[18px]" />
    </Link>
  );
}
