"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorTemplateProps = ComponentProps<typeof Link> & {
  matchDepth?: number;
  disabled?: boolean;
};

export default function AnchorTemplate({
  matchDepth = 2,
  className = "",
  disabled,
  children,
  ...props
}: AnchorTemplateProps) {
  const path = usePathname();
  const isMatch =
    matchDepth === 0
      ? path === props.href
      : props.href.toString().split("/")[matchDepth]?.toLowerCase() ===
        path.split("/")[matchDepth]?.toLowerCase();

  if (disabled) {
    return (
      <div className={cn(className, "cursor-not-allowed")}>{children}</div>
    );
  }

  return (
    <div className="relative w-full">
      <Link
        className={cn(
          className,
          "relative z-10 flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium tracking-tight text-zinc-700 transition duration-200 hover:bg-neutral-200/40 hover:text-black dark:text-zinc-300/90 dark:hover:bg-neutral-900/50 dark:hover:text-white",
          isMatch &&
            "bg-neutral-200/40 font-semibold text-black dark:bg-neutral-900/50 dark:text-white",
        )}
        {...props}
      >
        <span>{children}</span>
        <span className="rounded-md border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-xs leading-none text-neutral-700 no-underline dark:border-neutral-800 dark:bg-neutral-300/10 dark:text-neutral-400">
          Pro
        </span>
      </Link>
    </div>
  );
}
