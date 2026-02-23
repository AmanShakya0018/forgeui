export const title = "Stack Ripple";
export const routepoint = "stack-ripple";
export const description = "Animated stacked notification cards ripple open with smooth transitions, showing messages, signups, and billing reminders.";

export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

export const cliscript = "add @forgeui/stack-ripple";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

const packagescript = "motion react-icons clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const stackRippleProps = [
  {
    prop: "stackCardItems",
    type: "StackCardItem[]",
    default: "stackItems",
    description: "Array of card objects to render inside the ripple stack. Each object in the array must include the following fields:",
  },
  {
    prop: "stackCardItems[].id",
    type: "string",
    default: "\"item1\"",
    description: "Unique identifier for the card (used as key).",
  },
  {
    prop: "stackCardItems[].icon",
    type: "React.ReactNode",
    default: "<BiSolidMessageRounded /> wrapped in styled span",
    description: "Icon component displayed inside the card (wrapped in a styled container).",
  },
  {
    prop: "stackCardItems[].title",
    type: "string",
    default: "\"New Message\"",
    description: "Title displayed as the main label of the card.",
  },
  {
    prop: "stackCardItems[].description",
    type: "string",
    default: "\"Forge UI\"",
    description: "Short description or subtitle displayed under the title.",
  },
  {
    prop: "stackCardItems[].time",
    type: "string",
    default: "\"3 hrs ago\"",
    description: "Relative time or timestamp displayed on the right side of the card.",
  },
];



export const democode = `import { FaDollarSign, FaUser } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";

import StackRipple from '@/components/forgeui/stack-ripple';

export function ${title.replace(/\s+/g, "")}Example() {

  const stackItems = [
    {
      id: "item1",
      icon: (
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF3D71]">
          <BiSolidMessageRounded className="size-5 text-neutral-200 dark:text-neutral-300" />
        </span>
      ),
      title: "New Message",
      description: "Forge UI",
      time: "3 hrs ago",
    },
    {
      id: "item2",
      icon: (
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 dark:bg-yellow-500">
          <FaUser className="size-5 text-neutral-100 dark:text-neutral-200" />
        </span>
      ),
      title: "User Signed Up",
      description: "Forge UI",
      time: "7 hrs ago",
    },
    {
      id: "item3",
      icon: (
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500">
          <FaDollarSign className="size-5 text-neutral-200 dark:text-neutral-100" />
        </span>
      ),
      title: "Billing Reminder",
      description: "Forge UI",
      time: "9 hrs ago",
    },
  ];

  return (
    <StackRipple stackCardItems={stackItems} />
  )
}
`;


export const code = `"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaDollarSign, FaUser } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";
import { AnimatePresence, motion, Variants } from "motion/react";

type StackCardItem = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
};

type StackRippleProps = {
  stackCardItems?: StackCardItem[];
};

const stackItems: StackCardItem[] = [
  {
    id: "item1",
    icon: (
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF3D71]">
        <BiSolidMessageRounded className="size-5 text-neutral-200 dark:text-neutral-300" />
      </span>
    ),
    title: "New Message",
    description: "Forge UI",
    time: "3 hrs ago",
  },
  {
    id: "item2",
    icon: (
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 dark:bg-yellow-500">
        <FaUser className="size-5 text-neutral-100 dark:text-neutral-200" />
      </span>
    ),
    title: "User Signed Up",
    description: "Forge UI",
    time: "7 hrs ago",
  },
  {
    id: "item3",
    icon: (
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500">
        <FaDollarSign className="size-5 text-neutral-200 dark:text-neutral-100" />
      </span>
    ),
    title: "Billing Reminder",
    description: "Forge UI",
    time: "9 hrs ago",
  },
];

const StackRipple = ({ stackCardItems = stackItems }: StackRippleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const popup1Variant: Variants = {
    open: {
      transform: "translateY(-55px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 1,
        bounce: 0.3,
        delay: 0.13,
      },
    },
    close: {
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 1,
        bounce: 0.3,
        delay: 0.13,
      },
    },
  };
  const popup2Variant: Variants = {
    open: {
      transform: "translateY(0px) scale(1)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 1,
        bounce: 0.3,
        delay: 0.13,
      },
    },
    close: {
      transform: "translateY(0px) scale(0.95)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 1,
        bounce: 0.3,
        delay: 0.13,
      },
    },
  };
  const popup3Variant: Variants = {
    open: {
      transform: "translateY(55px) scale(1)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 1,
        bounce: 0.3,
        delay: 0.13,
      },
    },
    close: {
      transform: "translateY(0px) scale(0.9)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 1,
        bounce: 0.3,
        delay: 0.13,
      },
    },
  };
  const buttonVariant: Variants = {
    open: {
      transform: "translateY(55px) ",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 1,
        bounce: 0.3,
        delay: 0.13,
      },
    },
    close: {
      transform: "translateY(0px) ",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        mass: 1,
        bounce: 0.3,
        delay: 0.13,
      },
    },
  };
  const iconVariant: Variants = {
    open: {
      rotate: 180,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
        mass: 1,
        bounce: 0.3,
        delay: 0.13,
      },
    },
    close: {
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
        mass: 1,
        bounce: 0.3,
        delay: 0.13,
      },
    },
  };

  return (
    <motion.div
      initial="close"
      animate={isOpen ? "open" : "close"}
      className={cn(
        "relative",
        "flex w-full max-w-[400px] flex-col justify-center",
        "rounded-xl px-0.5 pb-0.5 pt-0.5",
      )}
    >
      <div
        className={cn(
          "flex min-h-[300px] w-full flex-col gap-1 overflow-hidden",
        )}
      >
        <div className="relative mx-auto flex h-[300px] w-full max-w-[400px] items-center gap-1 px-1">
          <div className="absolute left-0 top-0 h-full w-full p-2">
            <div className="relative h-full w-full">
              <StackCard
                top="top-[100px]"
                variant={popup3Variant}
                icon={stackCardItems[0].icon}
                title={stackCardItems[0].title}
                description={stackCardItems[0].description}
                time={stackCardItems[0].time}
              />

              <StackCard
                top="top-[90px]"
                variant={popup2Variant}
                icon={stackCardItems[1].icon}
                title={stackCardItems[1].title}
                description={stackCardItems[1].description}
                time={stackCardItems[1].time}
              />

              <StackCard
                top="top-[80px]"
                variant={popup1Variant}
                icon={stackCardItems[2].icon}
                title={stackCardItems[2].title}
                description={stackCardItems[2].description}
                time={stackCardItems[2].time}
              />
              <motion.button
                onClick={() => setIsOpen((prev) => !prev)}
                variants={buttonVariant}
                className={cn(
                  "absolute inset-x-0 top-[168px] mx-auto",
                  "flex h-[32px] w-full max-w-[100px] items-center justify-center gap-1 px-1",
                  "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                  "rounded-xl border bg-gradient-to-b from-white to-neutral-50",
                  "dark:from-neutral-800 dark:to-[#101010]",
                )}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={isOpen ? "hide" : "show"}
                    className="text-xs text-primary/80"
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? "Hide" : "Show All"}
                  </motion.p>
                </AnimatePresence>

                <motion.span variants={iconVariant} className="text-primary/80">
                  <MdKeyboardArrowDown />
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StackRipple;

type StackCardProps = {
  top: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  variant: Variants;
};

function StackCard({
  top,
  icon,
  title,
  description,
  time,
  variant,
}: StackCardProps) {
  return (
    <motion.div
      variants={variant}
      className={cn(
        "absolute inset-x-0 mx-auto",
        top,
        "flex h-[60px] w-full max-w-[320px] items-center justify-between",
        "rounded-xl border bg-background px-2",
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "dark:[box-shadow:0_-20px_60px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl">
          {icon}
        </span>
        <div className="flex flex-col justify-center gap-[1px]">
          <p className="text-xs font-medium text-primary/80">{title}</p>
          <p className="text-[11px] text-primary/50">{description}</p>
        </div>
      </div>
      <div className="text-[11px] text-primary/50">{time}</div>
    </motion.div>
  );
}
`