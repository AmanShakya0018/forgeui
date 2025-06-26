"use client";
import "./statscard.css";
import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import Image from "next/image";

type StatsCardProps = {
  gradientColor?: string;
  statsType?: string;
  firstPerson?: string;
  secondPerson?: string;
  firstData?: number;
  secondData?: number;
  firstImage?: string;
  secondImage?: string;
};

const StatsCard = ({
  gradientColor = "#60A5FA",
  statsType = "PRs Merged",
  firstPerson = "Toji Fushiguro",
  secondPerson = "Gojo Satoru",
  firstData = 23,
  secondData = 18,
  firstImage = "/assets/toji.png",
  secondImage = "/assets/gojo.png",
}: StatsCardProps) => {
  return (
    <div
      className={cn(
        "group w-full max-w-[350px] rounded-xl border border-border bg-background p-8",
        "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
      )}
    >
      <div
        className={cn(
          "z-40 h-[20rem] rounded-xl bg-background",
          "[mask-image:radial-gradient(50%_90%_at_50%_50%,white_30%,transparent_100%)]",
        )}
      >
        <div className="relative flex h-full items-start justify-center overflow-hidden p-8">
          <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-200 group-hover:-translate-y-80">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-neutral-50 to-neutral-100 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.15)_inset,0px_4px_8px_-2px_rgba(0,0,0,0.1)] dark:border-neutral-700/50 dark:from-neutral-800 dark:to-neutral-900">
              <Image
                alt="avatar"
                width={100}
                height={100}
                className="h-16 w-16 rounded-xl object-cover"
                src={firstImage}
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <p className="text-sm font-bold text-foreground">{firstPerson}</p>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-full bg-neutral-100/40 px-3 py-1 text-xs dark:bg-neutral-800/40">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-muted-foreground">{statsType}</span>
              <div className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span className="font-semibold text-foreground">{firstData}</span>
            </div>
            <Graph gradientColor={gradientColor} />
          </div>

          <div className="absolute inset-0 flex translate-y-80 flex-col items-center justify-center transition duration-200 group-hover:translate-y-0">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-neutral-50 to-neutral-100 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.15)_inset,0px_4px_8px_-2px_rgba(0,0,0,0.1)] dark:border-neutral-700/50 dark:from-neutral-800 dark:to-neutral-900">
              <Image
                alt="avatar"
                width={100}
                height={100}
                className="h-16 w-16 rounded-xl object-cover"
                src={secondImage}
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <p className="text-sm font-bold text-foreground">
                {secondPerson}
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-full bg-neutral-100/40 px-3 py-1 text-xs dark:bg-neutral-800/40">
              <TrendingUp className="h-3 w-3 text-red-500" />
              <span className="text-muted-foreground">{statsType}</span>
              <div className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span className="font-semibold text-foreground">
                {secondData}
              </span>
            </div>
            <Graph gradientColor={gradientColor} />
          </div>
        </div>
      </div>
      <h3 className="py-2 text-[16px] font-semibold text-foreground">
        Top performer of the week
      </h3>
      <p className="max-w-sm text-xs font-normal text-neutral-600 dark:text-neutral-400">
        Based on activity scores and contributions
      </p>
    </div>
  );
};

export default StatsCard;

const Graph = ({ gradientColor }: { gradientColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="336"
    height="126"
    viewBox="0 0 336 126"
    fill="none"
    className="mt-4"
  >
    <path
      d="M0 1C10 1 10 58 20 66C30 74 30 112 40 110C50 108 50 125 60 122C70 119 70 52 80 52C90 52 90 95 100 90C110 85 110 65 120 70C130 75 130 83 140 82C150 81 150 60 160 64C170 68 170 58 180 58C190 58 190 50 200 54C210 58 210 92 220 90C230 88 230 98 240 94C250 90 250 114 260 112C270 110 270 96 280 100C290 104 290 40 300 40C310 40 310 102 320 104C330 106 330 106 336 104"
      stroke="currentColor"
      strokeWidth="1"
      className="text-muted-foreground/50"
    />
    <g mask="url(#graph-mask-1)">
      <circle
        className="graph graph-light-1"
        cx="0"
        cy="0"
        r="20"
        fill="url(#graph-blue-grad)"
      />
    </g>
    <defs>
      <mask id="graph-mask-1">
        <path
          d="M0 1C10 1 10 58 20 66C30 74 30 112 40 110C50 108 50 125 60 122C70 119 70 52 80 52C90 52 90 95 100 90C110 85 110 65 120 70C130 75 130 83 140 82C150 81 150 60 160 64C170 68 170 58 180 58C190 58 190 50 200 54C210 58 210 92 220 90C230 88 230 98 240 94C250 90 250 114 260 112C270 110 270 96 280 100C290 104 290 40 300 40C310 40 310 102 320 104C330 106 330 106 336 104"
          strokeWidth="2"
          stroke="white"
        />
      </mask>
      <radialGradient id="graph-blue-grad" fx="1">
        <stop offset="0%" stopColor={gradientColor} />
        <stop offset="20%" stopColor={gradientColor} stopOpacity="0.8" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);
