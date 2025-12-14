"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type AnimatedTabsProps = {
  tabs: Array<string>;
  variant?: "default" | "underline";
};

const AnimatedTabs = ({ tabs, variant = "default" }: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  if (variant === "underline") {
    return (
      <div className="relative flex items-center border-b border-border">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative flex h-10 items-center px-4 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex w-fit items-center rounded-full bg-background p-1">
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={index}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "relative flex h-8 items-center rounded-full px-3 text-sm font-medium transition-colors duration-200",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab-background"
                className="absolute inset-0 rounded-full bg-primary"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
};

export default AnimatedTabs;
