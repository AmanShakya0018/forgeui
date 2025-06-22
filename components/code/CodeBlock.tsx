"use client";
import { CodeIcon, TerminalIcon } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { CopyCode } from "./CopyCode";
import { cn } from "@/lib/utils";
import React from "react";

type CodeBlockProps = {
  fileName?: string;
  copyCode?: boolean;
  contentClassName?: string;
  customFilePath?: string;
  simpleCode?: string;
  code: string;
} & React.ComponentProps<"div">;

export function CodeBlock({
  fileName,
  className,
  contentClassName,
  code,
  copyCode = true,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-neutral-300/50 bg-neutral-200/30 dark:border-neutral-800/60 dark:bg-neutral-900/40",
        className,
      )}
    >
      {fileName && copyCode && (
        <div className="relative flex h-10 items-center justify-between border-b border-neutral-300/50 bg-neutral-200/30 pl-4 pr-2.5 dark:border-neutral-800/60 dark:bg-neutral-900/30">
          <div className="flex items-center gap-2">
            {fileName === "Terminal" ? (
              <TerminalIcon
                size={14}
                className="text-neutral-500 dark:text-neutral-600"
              />
            ) : (
              <CodeIcon
                size={14}
                className="text-neutral-500 dark:text-neutral-600"
              />
            )}
            <span className="text-[13px] font-medium leading-none text-neutral-500">
              {fileName}
            </span>
          </div>
          <CopyCode code={code} />
        </div>
      )}
      <div
        className={cn("relative max-h-[38rem] overflow-auto", contentClassName)}
      >
        <div className="block w-max min-w-max p-4 dark:hidden">
          <SyntaxHighlighter
            language="jsx"
            style={oneLight}
            customStyle={{
              margin: 0,
              padding: 0,
              background: "transparent",
              fontSize: "0.875rem",
            }}
            wrapLines={true}
            showLineNumbers={false}
            lineProps={() => ({
              style: {
                backgroundColor: "transparent",
                display: "block",
                width: "100%",
              },
            })}
            PreTag="div"
          >
            {String(code)}
          </SyntaxHighlighter>
        </div>
        <div className="hidden w-max min-w-max p-4 dark:block">
          <SyntaxHighlighter
            language="jsx"
            style={oneDark}
            customStyle={{
              margin: 0,
              padding: 0,
              background: "transparent",
              fontSize: "0.875rem",
            }}
            wrapLines={true}
            showLineNumbers={false}
            lineProps={() => ({
              style: {
                backgroundColor: "transparent",
                display: "block",
                width: "100%",
              },
            })}
            PreTag="div"
          >
            {String(code)}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
