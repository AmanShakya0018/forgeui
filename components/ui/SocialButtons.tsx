"use client";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function GithubLink() {
  return (
    <Link
      href={"https://github.com/AmanShakya0018/forgeui"}
      target="_blank"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-900",
      )}
    >
      <FaGithub className="h-[18px] w-[18px]" />
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
