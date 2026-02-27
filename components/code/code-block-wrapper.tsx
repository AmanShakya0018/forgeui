"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && "max-h-96")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:max-h-162.5 [&_pre]:pb-25",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]",
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "from-background/5 to-background absolute flex items-center justify-center bg-linear-to-b to-99% p-2",
            isOpened ? "from-background/40 inset-x-0 bottom-0 h-12" : "inset-0",
          )}
        >
          <CollapsibleTrigger asChild>
            <Button className="mb-8 h-8 cursor-pointer bg-neutral-100 text-xs text-neutral-900 ring-1 ring-neutral-200 transition-all duration-150 hover:bg-neutral-200/70 hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 dark:ring-neutral-800 dark:hover:bg-neutral-700/80 dark:hover:text-neutral-200">
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}
