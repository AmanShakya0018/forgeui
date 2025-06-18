"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
};

export default function AnchorNav({
  absolute,
  className = "",
  disabled,
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
  return (
    <Link
      className={cn(
        className,
        "relative text-sm font-medium text-zinc-500 hover:text-foreground/80 dark:text-zinc-400",
        isMatch && "font-semibold text-black dark:text-white",
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
