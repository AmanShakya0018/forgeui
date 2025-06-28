export const title = "Security Card";
export const routepoint = "security-card";
export const description = "Dynamic security identity card with animated verification, glowing avatar outline, and infinite character scramble stream.";

export const cliscript = "add https://forgeui.amanshakya.in/registry/security-card.json";

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

export const csscode = `.animate-draw-outline {
  stroke-dasharray: 160;
  stroke-dashoffset: 160;
  animation: draw-outline;
  animation-duration: 4s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

@keyframes draw-outline {
  from {
    stroke-dasharray: 160;
    stroke-dashoffset: 160;
  }
  to {
    stroke-dasharray: 160;
    stroke-dashoffset: 0;
  }
}

.animate-draw {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: draw;
  animation-duration: 7s;
  animation-timing-function: ease;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes draw {
  from {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
  }
  to {
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
  }
}
`


export const screennotice = "*Dark mode recommended"

const packagescript = "motion react-icons clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const securityCardProps = [
  {
    prop: "delay",
    type: "number",
    default: "5000",
    description: "Duration in milliseconds before the card resets its animation loop.",
  },
  {
    prop: "name",
    type: "string",
    default: `"Liam Parker"`,
    description: "Name displayed on the verification label inside the card.",
  },
  {
    prop: "email",
    type: "string",
    default: `"liam.parker@example.com"`,
    description: "Email displayed below the verified user name on the card.",
  },
];


export const democode = `import SecurityCard from '@/components/forgeui/security-card';

export function ${title.replace(/\s+/g, "")}Example() {

  return (
    <SecurityCard
      delay={5000} // 5sec to again start the animation
      name="Liam Parker" // name to be displayed in the card
      email="liam.parker@example.com" //email to be displayed in the card
    />
  )
}
`;

export const code = `"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { motion } from "motion/react";

type SecurityCardProps = {
  delay?: number;
  name?: string;
  email?: string;
};

const SecurityCard = ({
  delay = 5000,
  name = "Liam Parker",
  email = "liam.parker@example.com",
}: SecurityCardProps) => {
  const [animationKey, setAnimationKey] = useState(0);
  const delayTime = Math.max(delay, 5000);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, delayTime);

    return () => clearInterval(interval);
  }, [delayTime]);

  return <Securitycard name={name} email={email} key={animationKey} />;
};
export default SecurityCard;

const Securitycard = ({ name, email }: { name: string; email: string }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "flex h-[27rem] w-full max-w-[350px] items-center justify-center",
        "rounded-md border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900",
      )}
    >
      <InfiniteScrambler />
      <div
        className={cn(
          "absolute bottom-0 h-1/2 w-[150%] rounded-t-[60%]",
          "bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-[0_0_900px_rgba(115,115,115,0.9)]",
          "dark:from-neutral-800 dark:to-neutral-950 dark:shadow-[0_0_900px_rgba(10,10,10,0.9)]",
        )}
      />
      <div className="absolute top-[70%] flex h-12 w-full flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center text-xs text-primary">
          <motion.p
            initial={{
              translateX: 8,
            }}
            animate={{
              translateX: -2,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 1.8,
            }}
          >
            {name}
          </motion.p>
          <CheckCircle />
        </div>
        <div className="text-[10px] text-neutral-500">{email}</div>
      </div>
      <div className="relative rounded-[2px] bg-neutral-200/50 px-[3px] py-[3.2px] dark:bg-neutral-950/50">
        <div className="relative h-32 w-24 rounded-[2px] bg-gradient-to-br from-neutral-100 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800">
          <FaceCard />
        </div>
      </div>
      <div className="absolute left-0 top-0 hidden h-[100px] w-full [background-image:linear-gradient(to_bottom,theme(colors.background)_20%,transparent_100%)] dark:block" />
      <div className="absolute left-0 top-0 block h-[100px] w-full [background-image:linear-gradient(to_bottom,rgb(212,212,216,0.9)_20%,transparent_100%)] dark:hidden" />
    </div>
  );
};

const FaceCard = () => {
  return (
    <svg
      viewBox="0 0 80 96"
      fill="none"
      className="absolute inset-0 h-full w-full"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path
        d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776"
        className="stroke-neutral-400 dark:stroke-[#26262C]"
      ></path>
      <path
        d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682"
        className="stroke-neutral-400 dark:stroke-[#26262C]"
      />
      <path
        d="M26.22 78.25c2.679-3.522 1.485-17.776 1.485-17.776-1.084-2.098-1.918-4.288-2.123-5.619-3.573 0-3.7-8.05-3.827-9.937-.102-1.509 1.403-1.383 2.169-1.132-.298-1.3-.92-5.408-1.021-11.446C22.775 24.794 30.94 17.75 40 17.75h.005c9.059 0 17.225 7.044 17.097 14.59-.102 6.038-.723 10.147-1.021 11.446.765-.251 2.271-.377 2.169 1.132-.128 1.887-.254 9.937-3.827 9.937-.205 1.331-1.039 3.521-2.123 5.619 0 0-1.194 14.254 1.485 17.776"
        className="animate-draw-outline stroke-[#06b6d4] [filter:drop-shadow(0_0_6px_#06b6d4)]"
      ></path>
      <path
        d="M27.705 60.474a26.884 26.884 0 0 0 1.577 2.682c1.786 2.642 5.36 6.792 10.718 6.792h.005c5.358 0 8.932-4.15 10.718-6.792a26.884 26.884 0 0 0 1.577-2.682"
        className="animate-draw stroke-[#06b6d4] [filter:drop-shadow(0_0_6px_#06b6d4)]"
      />
    </svg>
  );
};

const CheckCircle = () => {
  return (
    <div className="relative">
      <svg width="18" height="18">
        <motion.circle
          cx="9"
          cy="9"
          r="6"
          fill="#06b6d4"
          className="rounded-full [filter:drop-shadow(0_0_1px_#06b6d4)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 2.3,
          }}
        />
      </svg>
      <motion.div
        className="absolute left-[5px] top-[5px] flex items-center justify-center text-white dark:text-black"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 2.4,
        }}
      >
        <IoMdCheckmark className="size-2" />
      </motion.div>
    </div>
  );
};

const CHAR_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*0123456789";

const InfiniteScrambler = () => {
  const [text, setText] = useState(
    "6*7A0^!HIETD@6XS749%2$4L4RO$SH*8W#6OPLLF%WSKVI^PTT1PJUOS60EQL$*K53*Y#AK5GDM6XIWX79XR^DQOMEJF$F1ZNL*L0Z&#LJ4B$E97Q76VF0U#HY!37J5$GKCI0RMK$2P1F9JJA9#3EYGVR@IAHZCUKIYPZALXQMJ3YOO8O!519!GZTQSA$#BEXUYPSZ302Z*&DDWW!NI61S#!MAHJ0Y&3J8*EBNIMM$#X%46NJ0*9P3L@UW5A8NCZX&98CQ75NL9X98SFXXEH11NBB^E&LQ1",
  );

  useEffect(() => {
    const scramble = () =>
      Array.from(
        { length: 287 },
        () => CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)],
      ).join("");

    const interval = setInterval(() => {
      setText(scramble());
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-[10%] max-w-[322px]">
      <p className="whitespace-normal break-words font-mono text-[13px] leading-7 text-neutral-500 opacity-20">
        {text}
      </p>
    </div>
  );
};
`;