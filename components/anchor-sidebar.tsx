"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // note: it's framer-motion, not motion/react
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

  if (disabled) {
    return (
      <div className={cn(className, "cursor-not-allowed")}>{children}</div>
    );
  }

  return (
    <div className="relative w-full">
      {isMatch && (
        <motion.div
          layoutId="anchor-tab-background"
          transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 rounded-lg border border-primary/10 bg-gradient-to-r from-primary/5 to-primary/10"
        />
      )}

      <Link
        className={cn(
          className,
          "relative z-10 flex w-full items-center rounded-lg px-3 py-2 text-sm text-zinc-500 transition duration-200 hover:text-black dark:text-zinc-400 dark:hover:text-white",
          isMatch && "font-medium text-black dark:text-white",
        )}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
