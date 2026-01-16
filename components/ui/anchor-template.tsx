"use client";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
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

  const itemVariants = {
    initial: {
      x: -5,
      opacity: 0,
      filter: "blur(2px)",
    },
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div variants={itemVariants} className="relative w-full">
      {isMatch && (
        <motion.div
          layoutId="anchorTemplate-tab-background"
          transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 rounded-lg border border-primary/10 bg-gradient-to-r from-primary/5 to-primary/10"
        />
      )}

      <Link
        className={cn(
          className,
          "relative z-10 flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium tracking-tight text-zinc-700 transition duration-200 hover:bg-neutral-200/40 hover:text-black dark:text-zinc-300/90 dark:hover:bg-neutral-900/50 dark:hover:text-white",
          isMatch && "font-semibold text-black dark:text-white",
        )}
        {...props}
      >
        <span>{children}</span>
        <span className="rounded-md border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-xs leading-none text-neutral-700 no-underline dark:border-neutral-800 dark:bg-neutral-300/10 dark:text-neutral-400">
          Pro
        </span>
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
    </motion.div>
  );
}
