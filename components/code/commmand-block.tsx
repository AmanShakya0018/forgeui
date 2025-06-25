"use client";

import { useMemo, useState } from "react";
import { CopyCode } from "./CopyCode";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import { cn } from "@/lib/utils";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

type CommandBlockProps = {
  npmCommand?: string;
  yarnCommand?: string;
  pnpmCommand?: string;
  bunCommand?: string;
} & React.ComponentProps<"div">;

export function CommandBlock({
  npmCommand,
  yarnCommand,
  pnpmCommand,
  bunCommand,
  className,
}: CommandBlockProps) {
  const tabs = useMemo(() => {
    const entries: [PackageManager, string | undefined][] = [
      ["npm", npmCommand],
      ["pnpm", pnpmCommand],
      ["yarn", yarnCommand],
      ["bun", bunCommand],
    ];
    return Object.fromEntries(entries.filter(([, cmd]) => !!cmd)) as Record<
      PackageManager,
      string
    >;
  }, [npmCommand, pnpmCommand, yarnCommand, bunCommand]);

  const firstKey = Object.keys(tabs)[0] as PackageManager;
  const [packageManager, setPackageManager] =
    useState<PackageManager>(firstKey);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-300/50 bg-neutral-200/30 dark:border-neutral-800/60 dark:bg-neutral-900/40",
        className,
      )}
    >
      <Tabs
        value={packageManager}
        onValueChange={(value) => setPackageManager(value as PackageManager)}
      >
        <div className="flex items-center justify-between border-b border-neutral-300/50 bg-neutral-200/30 pr-2.5 dark:border-neutral-800/60 dark:bg-neutral-900/30">
          <TabsList className="h-10 bg-transparent pl-4">
            {Object.entries(tabs).map(([key]) => (
              <TabsTrigger
                key={key}
                value={key}
                classNameIndicator="-bottom-[1.5px]"
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
          <CopyCode code={tabs[packageManager]} />
        </div>
        <div className="relative overflow-x-auto">
          {Object.entries(tabs).map(([key, value]) => (
            <TabsContent key={key} value={key}>
              <pre className="px-4 pb-4">
                <code
                  className="relative font-mono text-sm leading-none !text-primary"
                  data-language="bash"
                >
                  {value}
                </code>
              </pre>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
