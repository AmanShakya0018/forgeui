export const title = "Fraud Card";
export const routepoint = "fraud-card";
export const description = "A security alert card inspired by Clerk’s landing page, showcasing blocked emails with smooth hover animations.";

export const cliscript = "add https://forgeui.amanshakya.in/registry/fraud-card.json";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

export const csscode = `.clbeam {
  offset-anchor: 10px 0px;
  animation: none;
}

.clbeam-container:hover .clbeam {
  animation: clbeam-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.05, 0.05, 0.05, 0.03);
  animation-duration: 3s;
  animation-delay: 0s;
}

.clbeam-line-1 {
  offset-path: path("M 13 -4 v 8 l 9.9 9.2 v 95");
}

@keyframes clbeam-animation-path {
  0% {
    offset-distance: 0%;
  }
  50% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}
`

const packagescript = "motion @tabler/icons-react clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const fraudCardProps = [
  {
    prop: "blockedEmails",
    type: "BlockedEmail[]",
    default: "[]",
    description:
      "An array of objects containing blocked email addresses and the time they were flagged."
  }
];

export const screennotice = "*Tap to animate - full experience on desktop."
export const screennoticedesktop = "*Hover to animate - (Dark mode available for now)"

export const democode = `import FraudCard from '@/components/forgeui/fraud-card';

const blockedEmails = [
  { email: "bad_actor+1@gamil.com", time: "Aug 9 at 14:09" },
  { email: "spammer123@mailor.com", time: "Aug 10 at 11:23" },
  { email: "fake+prmo@tempmail.com", time: "Aug 11 at 09:45" },
  { email: "bot@disposablemail.org", time: "Aug 12 at 16:02" },
];

export function ${title.replace(/\s+/g, "")}Example() {

  return (
    <FraudCard blockedEmails={blockedEmails} />
  )
}
`;

export const code = `"use client";
import { cn } from "@/lib/utils";
import { IconCircleDotted, IconPointFilled, IconX } from "@tabler/icons-react";
import { motion, Variants } from "motion/react";
import { useState } from "react";

type BlockedEmail = {
  email: string;
  time: string;
};

type FraudCardProps = {
  blockedEmails: BlockedEmail[];
};

const FraudCard = ({ blockedEmails }: FraudCardProps) => {
  const [hovered, setHovered] = useState(false);

  const parentvariant = {
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.075,
        delayChildren: 0.15,
      },
    },
  };

  const emailvariant = {
    open: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.3 },
    },
    close: {
      opacity: 0,
      filter: "blur(10px)",
      y: 5,
      transition: { duration: 0.3 },
    },
  };

  const iconvariant = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    close: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.3 },
    },
  };

  const timevariant = {
    open: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.3 },
    },
    close: {
      opacity: 0,
      filter: "blur(5px)",
      y: 10,
      transition: { duration: 0.3 },
    },
  };

  const circlevariant: Variants = {
    open: {
      rotate: 360,
      transition: {
        ease: "linear",
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
    close: {
      rotate: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
        repeat: 0,
      },
    },
  };

  return (
    <motion.div
      onClick={() => setHovered((prev) => !prev)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      variants={parentvariant}
      animate={hovered ? "open" : "close"}
      initial="close"
      className={cn(
        "h-[34rem] min-h-[34rem] w-[350px] max-w-[350px]",
        "group overflow-hidden border border-neutral-800",
        "clbeam-container relative flex flex-col",
        "rounded-md bg-neutral-900 p-4 text-white",
      )}
    >
      <div className="absolute inset-0 hidden h-full w-full [@media(min-width:400px)]:block">
        <svg
          className="h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 90 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#535353"
            strokeWidth="0.2"
            pathLength="105"
            strokeDasharray="105"
          >
            <path d="M 13 0 v 8 l 9.9 9.2 v 80" />
            <animate
              attributeName="stroke-dashoffset"
              from="105"
              to="0"
              dur="1s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.25,0.1,0.5,1"
              keyTimes="0; 1"
            />
          </g>
          <g mask="url(#clbeam-mask-1)">
            <circle
              className="clbeam clbeam-line-1"
              cx="0"
              cy="0"
              r="15"
              fill="url(#clbeam-red-grad)"
            />
          </g>
          <defs>
            <mask id="clbeam-mask-1">
              <path
                d="M 13 0 v 8 l 9.9 9.2 v 80"
                stroke="white"
                strokeWidth="0.3"
              />
            </mask>
            <radialGradient id="clbeam-red-grad" fx="1">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className={cn("flex flex-col gap-2")}>
        <h2 className="text-[14px] font-bold">Email Security Enhancements</h2>
        <p className="text-[11px] text-neutral-500 sm:text-xs">
          Improve account integrity and reduce fake registrations by identifying
          temporary inboxes and filtering suspicious patterns in email addresses
          used.
        </p>
      </div>
      <div className="mt-8 px-3 py-3">
        <div className="relative z-[10] flex items-center justify-center gap-2 rounded-[6px] bg-black p-0.5">
          <div className="flex h-full w-full items-center justify-between gap-3 rounded-[4px] bg-neutral-800 p-3">
            <div className="flex items-center justify-center gap-4">
              <motion.div variants={circlevariant} className="h-4 w-4">
                <IconCircleDotted className="h-full w-full text-white" />
              </motion.div>
              <p className="font-mono text-[10px] text-neutral-400 transition-all duration-300 group-hover:text-neutral-100">
                Malicious email activity flagged
              </p>
            </div>
            <p className="text-[10px] text-neutral-500">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-4 my-4 flex-1">
        <div className="absolute -inset-y-8 inset-x-5 block h-[25rem] w-[0.5px] bg-[#535353] [@media(min-width:400px)]:hidden" />
        <div className="absolute inset-0 -ml-4 flex h-full w-full flex-col items-center justify-center gap-5 p-2 [@media(min-width:400px)]:ml-5">
          {blockedEmails.map(({ email, time }) => (
            <div
              key={email}
              className="ml-4 flex h-full w-full justify-start gap-2 p-2"
            >
              <div className="relative mr-2 mt-1.5 h-6 w-6">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/10">
                  <IconPointFilled className="h-3 w-3 text-neutral-500" />
                </div>
                <motion.div
                  variants={iconvariant}
                  className="absolute inset-0 flex items-center justify-center rounded-full bg-red-500 p-1"
                >
                  <IconX className="h-4 w-4 text-neutral-800" />
                </motion.div>
              </div>
              <div className="flex flex-col items-start justify-center gap-1 p-1">
                <motion.h2
                  variants={emailvariant}
                  className="text-[10px] font-semibold text-neutral-200 sm:text-xs"
                >
                  {email}
                </motion.h2>
                <motion.p
                  variants={timevariant}
                  className="font-mono text-[9px] text-neutral-500"
                >
                  Blocked {time}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FraudCard;
`;