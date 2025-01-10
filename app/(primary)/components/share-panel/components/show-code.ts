export const title = "Share Panel";
export const routepoint = "share-panel";
export const description = "A dynamic share button that reveals social media icons with smooth hover transitions and animations.";


export const democode = `"use client";
import React from 'react'
import  SharePanel from './components/ui/share-panel';
function Page() {
  return (
    <>
      <SharePanel />
    </>
  )
}

export default Page;`;

export const code = `"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Twitter, Instagram, Linkedin, Link } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const shareButtons = [
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
  { icon: Link, label: "Copy Link" },
];

export default function SharePanel({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipProvider>
      <div
        className={cn(
          "relative",
          "w-[160px]", // Set width based on 4 icons (40px each)
          "h-10",
          "overflow-hidden",
          "rounded-full"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          className={cn(
            "absolute inset-0 w-full h-full",
            "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600",
            "hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700",
            "text-white font-semibold",
            "border border-emerald-500",
            "transition-all duration-500 ease-in-out",
            "shadow-lg hover:shadow-xl shadow-emerald-200/50",
            isHovered ? "opacity-0" : "opacity-100",
            className
          )}
          {...props}
        >
          <span className="flex items-center gap-2">
            <Link className="w-4 h-4 animate-pulse" />
            <span className="relative">
              <span className="tracking-wide">Share</span>
            </span>
          </span>
        </Button>

        <div className="absolute inset-0 flex">
          {shareButtons.map((button, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "h-full w-10",
                    "flex items-center justify-center",
                    "bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-500",
                    "text-white",
                    "transition-all duration-500 ease-in-out",
                    "border border-emerald-300",
                    "hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700",
                    "shadow-md hover:shadow-lg shadow-emerald-200/50",
                    index !== 0 && "border-l-0",
                    isHovered
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95",
                    \`transition-all duration-500 delay-[\${index * 75}ms]\`
                  )}
                >
                  <button.icon className="w-4 h-4 transition-transform duration-300 ease-in-out hover:scale-110" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">{button.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
`;