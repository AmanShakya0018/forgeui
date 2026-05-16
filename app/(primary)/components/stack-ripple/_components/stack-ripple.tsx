"use client";

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
      y: -55,
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
      y: 0,
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
      scale: 1,
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
      scale: 0.95,
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
      y: 55,
      scale: 1,
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
      y: 0,
      scale: 0.9,
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
        "flex w-full max-w-100 flex-col justify-center",
        "rounded-xl px-0.5 pt-0.5 pb-0.5",
      )}
    >
      <div
        className={cn("flex min-h-75 w-full flex-col gap-1 overflow-hidden")}
      >
        <div className="relative mx-auto flex h-75 w-full max-w-100 items-center gap-1 px-1">
          <div className="absolute top-0 left-0 h-full w-full p-2">
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
                  "absolute inset-x-0 top-42 mx-auto",
                  "flex h-8 w-full max-w-25 items-center justify-center gap-1 px-1",
                  "rounded-xl bg-linear-to-b from-white to-neutral-50 shadow-sm ring-1 shadow-black/8 ring-black/10",
                  "dark:from-neutral-800 dark:to-[#101010]",
                )}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={isOpen ? "hide" : "show"}
                    className="text-primary/80 text-xs"
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
        "flex h-15 w-full max-w-[320px] items-center justify-between",
        "bg-background rounded-xl px-2 shadow-sm ring-1 shadow-black/6 ring-black/10 dark:ring-neutral-800/60",
        "dark:[box-shadow:0_-20px_60px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl">
          {icon}
        </span>
        <div className="flex flex-col justify-center gap-px">
          <p className="text-primary/80 text-xs font-medium">{title}</p>
          <p className="text-primary/50 text-[11px]">{description}</p>
        </div>
      </div>
      <div className="text-primary/50 text-[11px]">{time}</div>
    </motion.div>
  );
}
