"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
  newPage?: boolean;
};

export default function AnchorNav({
  absolute,
  className = "",
  disabled,
  newPage,
  children,
  ...props
}: AnchorProps) {
  const path = usePathname();
  const isMatch = absolute
    ? props.href.toString().split("/")[1] == path.split("/")[1]
    : path === props.href;

  if (disabled)
    return (
      <div className={cn(className, "cursor-not-allowed")}>{children}</div>
    );
  if (newPage)
    return (
      <Link
        target="_blank"
        className={cn(
          className,
          "hover:text-foreground/80 relative text-sm font-medium text-zinc-500 transition-all duration-150 dark:text-zinc-400 dark:hover:text-neutral-200",
          isMatch && "font-semibold text-black dark:text-white",
        )}
        {...props}
      >
        {children}
      </Link>
    );
  return (
    <Link
      className={cn(
        className,
        "hover:text-foreground/80 relative text-sm font-medium text-zinc-500 transition-all duration-150 dark:text-zinc-400 dark:hover:text-neutral-200",
        isMatch && "font-semibold text-black dark:text-white",
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
