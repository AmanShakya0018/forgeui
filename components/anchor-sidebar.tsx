"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
};

export default function AnchorSidebar({
  absolute,
  className = "",
  disabled,
  children,
  ...props
}: AnchorProps) {
  const path = usePathname();
  const isMatch = absolute
    ? props.href.toString().split("/")[2] == path.split("/")[2]
    : path === props.href;

  if (disabled)
    return (
      <div className={cn(className, "cursor-not-allowed")}>{children}</div>
    );
  return (
    <Link
      className={cn(
        className,
        "text-zinc-500 dark:text-zinc-400 text-sm flex w-full items-center rounded-md border border-transparent pr-2 py-1 hover:text-black dark:hover:text-white hover:translate-x-1 transition duration-200",
        isMatch && "text-black dark:text-white font-medium"
      )}
      {...props}
    >
      {children}
    </Link>

  );
}
