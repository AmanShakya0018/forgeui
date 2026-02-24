export const title = "Spectrum Switcher";
export const routepoint = "spectrum-switcher";
export const description = "Interactive spectrum switcher with animated gradients, smooth dropdown transitions, and selectable themed color palettes.";


export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

export const cliscript = "add @forgeui/spectrum-switcher";

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

export const spectrumSwitcherProps = [
  {
    prop: "spectrums",
    type: "Spectrum[]",
    default: "defaultSpectrums",
    description: "Array of spectrum objects. Each object in the array must include the following fields:",
  },
  {
    prop: "spectrums[].id",
    type: "string",
    default: "\"sunset\"",
    description: "Unique identifier for the spectrum (used internally and as a key).",
  },
  {
    prop: "spectrums[].name",
    type: "string",
    default: "\"Sunset Glow\"",
    description: "Human-readable name displayed in the UI.",
  },
  {
    prop: "spectrums[].description",
    type: "string",
    default: "\"Warm and bold ambience\"",
    description: "Short description giving context about the spectrum.",
  },
  {
    prop: "spectrums[].color",
    type: "string (Tailwind classes)",
    default: "\"bg-gradient-to-br from-rose-400 via-orange-300 to-yellow-200\"",
    description: "Gradient background classes applied in light mode.",
  },
  {
    prop: "spectrums[].darkColor",
    type: "string (Tailwind classes)",
    default: "\"dark:from-rose-600 dark:via-orange-500 dark:to-yellow-400\"",
    description: "Gradient background classes applied in dark mode.",
  },
  {
    prop: "spectrums[].layoutId",
    type: "string",
    default: "\"spectrum-sunset\"",
    description: "Unique layoutId used by Framer Motion for smooth layout animations.",
  },
];



export const democode = `import SpectrumSwitcher from '@/components/forgeui/spectrum-switcher';

export function ${title.replace(/\s+/g, "")}Example() {
  
  const spectrums = [
    {
      id: "sunset",
      name: "Sunset Glow",
      description: "Warm and bold ambience",
      color: "bg-gradient-to-br from-rose-400 via-orange-300 to-yellow-200",
      darkColor: "dark:from-rose-600 dark:via-orange-500 dark:to-yellow-400",
      layoutId: "spectrum-sunset",
    },
    {
      id: "lavender",
      name: "Lavender Mist",
      description: "Soft and dreamy palette",
      color: "bg-gradient-to-br from-purple-400 via-pink-300 to-fuchsia-300",
      darkColor: "dark:from-purple-500 dark:via-pink-400 dark:to-fuchsia-400",
      layoutId: "spectrum-lavender",
    },
  ];

  return (
    <SpectrumSwitcher spectrums={spectrums} />
  )
}
`;


export const code = `"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiFairyWand } from "react-icons/gi";

type Spectrum = {
  id: string;
  name: string;
  description: string;
  color: string;
  darkColor: string;
  layoutId: string;
};

type SpectrumSwitcherProps = {
  spectrums?: Spectrum[];
};

const defaultSpectrums: Spectrum[] = [
  {
    id: "sunset",
    name: "Sunset Glow",
    description: "Warm and bold ambience",
    color: "bg-gradient-to-br from-rose-400 via-orange-300 to-yellow-200",
    darkColor: "dark:from-rose-600 dark:via-orange-500 dark:to-yellow-400",
    layoutId: "spectrum-sunset",
  },
  {
    id: "lavender",
    name: "Lavender Mist",
    description: "Soft and dreamy palette",
    color: "bg-gradient-to-br from-purple-400 via-pink-300 to-fuchsia-300",
    darkColor: "dark:from-purple-500 dark:via-pink-400 dark:to-fuchsia-400",
    layoutId: "spectrum-lavender",
  },
];

const SpectrumSwitcher = ({
  spectrums = defaultSpectrums,
}: SpectrumSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSpectrum, setSelectedSpectrum] = useState(spectrums[0]);

  const itemVariant: Variants = {
    open: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    close: {
      opacity: 0,
      y: -5,
      filter: "blur(5px)",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const dividerVariant: Variants = {
    open: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    close: {
      opacity: 0,
      scaleX: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[420px] rounded-lg p-1.5",
        "border border-neutral-200/70 dark:border-neutral-900/70",
      )}
    >
      <div
        className={cn(
          "ring-1 ring-neutral-200 dark:ring-neutral-800",
          "overflow-hidden rounded-[8px] shadow-[0_2px_4px_rgb(0,0,0,0.1)]",
          "bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950",
        )}
      >
        <motion.div
          className={cn("flex min-h-[67px] items-center justify-between px-4")}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-[6px]",
                "ring-1 ring-neutral-300/60 dark:ring-neutral-700/40",
                "bg-white/70 dark:bg-neutral-900/60",
                "shadow-[0_2px_5px_rgb(0,0,0,0.1)]",
                "dark:bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.2),transparent_70%)]",
              )}
            >
              <GiFairyWand className="h-[22px] w-[22px] text-neutral-600 dark:text-neutral-200" />
            </div>

            <div>
              <p className="text-[0.9rem] font-semibold text-neutral-900 dark:text-neutral-100">
                Choose Spectrum
              </p>
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  className="text-xs text-neutral-500 dark:text-neutral-400"
                  key={selectedSpectrum.name}
                  initial={{ opacity: 0, y: 3, filter: "blur(2px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -3, filter: "blur(2px)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {selectedSpectrum.name} selected
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <AnimatePresence>
              {!isOpen && (
                <motion.div className="flex items-center gap-1.5">
                  {spectrums.map((spectrum) => (
                    <motion.div
                      key={spectrum.id}
                      layoutId={spectrum.layoutId}
                      className={cn(
                        "h-7 w-7 rounded-md",
                        spectrum.color,
                        spectrum.darkColor,
                      )}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => setIsOpen((prev) => !prev)}
              className={cn(
                "flex items-center justify-center",
                "h-[30px] w-[30px] rounded-md transition-all duration-300",
                "bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 150,
                  mass: 1,
                  bounce: 0.3,
                  delay: 0.13,
                }}
              >
                <MdKeyboardArrowDown className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div className="p-2">
                {spectrums.map((spectrum, index) => (
                  <motion.div key={spectrum.id}>
                    {index > 0 && (
                      <motion.div
                        variants={dividerVariant}
                        initial="close"
                        animate="open"
                        exit="close"
                        className="mx-4 h-[1px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
                      />
                    )}

                    <motion.div
                      className="cursor-pointer rounded-lg p-2 transition-all duration-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/30"
                      onClick={() => {
                        setSelectedSpectrum(spectrum);
                        setIsOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          layoutId={spectrum.layoutId}
                          className={cn(
                            "h-12 w-12 flex-shrink-0 rounded-md",
                            spectrum.color,
                            spectrum.darkColor,
                          )}
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 90 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                          }}
                        />

                        <motion.div
                          variants={itemVariant}
                          initial="close"
                          animate="open"
                          exit="close"
                          className="flex flex-1 flex-col"
                        >
                          <span className="text-[0.9rem] font-medium text-neutral-900 transition-colors dark:text-neutral-100">
                            {spectrum.name}
                          </span>
                          <span className="text-xs text-neutral-500 transition-colors dark:text-neutral-400">
                            {spectrum.description}
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpectrumSwitcher;
`