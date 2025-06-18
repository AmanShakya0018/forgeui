"use client";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  matchDepth?: number;
  disabled?: boolean;
};

export default function Anchor({
  matchDepth = 1,
  className = "",
  disabled,
  children,
  ...props
}: AnchorProps) {
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
          "relative z-10 flex w-full items-center rounded-lg px-3 py-2 text-sm text-zinc-700 transition duration-200 hover:bg-neutral-200/40 hover:text-black dark:text-zinc-300 dark:hover:bg-neutral-900/50 dark:hover:text-white",
          isMatch && "font-medium text-black dark:text-white",
        )}
        {...props}
      >
        <span>{children}</span>
        {isMatch && (
          <motion.div
            className="ml-auto"
            animate={{ rotate: [0, -30, 27, -17, 13, 0] }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.div>
        )}
      </Link>
    </div>
  );
}
