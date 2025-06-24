"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  metadata: string;
}

export interface ExpandableCardProps {
  items: CardItem[];
  className?: string;
}

export default function ExpandableCard({
  items,
  className,
}: ExpandableCardProps) {
  const [current, setCurrent] = useState<CardItem | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));

  return (
    <div className="">
      <AnimatePresence>
        {current ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 z-10 bg-background/50 bg-opacity-10 backdrop-blur-xl"
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {current ? (
          <>
            <div className="absolute inset-0 z-10 grid place-items-center">
              <motion.div
                className="flex h-fit w-full max-w-xl cursor-pointer flex-col items-start gap-4 overflow-hidden rounded-md border bg-background p-4"
                ref={ref}
                layoutId={`cardItem-${current.id}`}
              >
                <div className="flex w-full items-center gap-4">
                  <motion.div layoutId={`cardItemIcon-${current.id}`}>
                    {current.icon}
                  </motion.div>
                  <div className="flex grow items-center justify-between">
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex w-full flex-row justify-between gap-0.5">
                        <motion.div
                          className="text-sm font-medium text-primary"
                          layoutId={`cardItemTitle-${current.id}`}
                        >
                          {current.title}
                        </motion.div>
                      </div>
                      <motion.p
                        layoutId={`cardItemSubtitle-${current.id}`}
                        className="text-sm text-primary/70"
                      >
                        {current.subtitle} / {current.description}
                      </motion.p>
                      <motion.div
                        className="flex flex-row gap-2 text-xs text-primary/70"
                        layoutId={`cardItemMetadata-${current.id}`}
                      >
                        {current.metadata}
                      </motion.div>
                    </div>
                  </div>
                </div>
                <motion.div
                  layout
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.1 },
                    filter: "blur(3px)",
                  }}
                  className="w-full text-sm text-primary/70"
                >
                  {current.details}
                </motion.div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>

      <div className={cn("relative flex items-start p-6", className)}>
        <div className="relative flex w-full flex-col items-center gap-4 px-2">
          {items.map((item) => (
            <motion.div
              layoutId={`cardItem-${item.id}`}
              key={item.id}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="flex w-full cursor-pointer flex-row items-center gap-4 rounded-md border bg-background p-2 shadow-md md:p-4"
              onClick={() => {
                setCurrent(item);
              }}
            >
              <motion.div layoutId={`cardItemIcon-${item.id}`}>
                {item.icon}
              </motion.div>
              <div className="flex w-full flex-col items-start justify-between gap-0.5">
                <motion.div
                  className="font-medium text-primary"
                  layoutId={`cardItemTitle-${item.id}`}
                >
                  {item.title}
                </motion.div>
                <motion.div
                  className="text-xs text-primary/70"
                  layoutId={`cardItemSubtitle-${item.id}`}
                >
                  {item.subtitle} / {item.description}
                </motion.div>
                <motion.div
                  className="flex flex-row gap-2 text-xs text-primary/70"
                  layoutId={`cardItemMetadata-${item.id}`}
                >
                  {item.metadata}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

export const MetaMask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 318.6 318.6"
    fill="none"
    {...props}
  >
    <path
      fill="#e2761b"
      stroke="#e2761b"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m274.1 35.5-99.5 73.9L193 65.8z"
    />
    <path
      d="m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z"
      fill="#e4761b"
      stroke="#e4761b"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z"
      fill="#e4761b"
      stroke="#e4761b"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill="#d7c1b3"
      stroke="#d7c1b3"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"
    />
    <path
      fill="#233447"
      stroke="#233447"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"
    />
    <path
      fill="#cd6116"
      stroke="#cd6116"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
    />
    <path
      fill="#e4751f"
      stroke="#e4751f"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"
    />
    <path
      d="m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
      fill="#f6851b"
      stroke="#f6851b"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill="#c0ad9e"
      stroke="#c0ad9e"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
    />
    <path
      fill="#161616"
      stroke="#161616"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
    />
    <path
      fill="#763d16"
      stroke="#763d16"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
    />
    <path
      d="m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
      fill="#f6851b"
      stroke="#f6851b"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Upstash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 341"
    xmlns="http://www.w3.org/2000/svg"
    width="256"
    height="341"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      fill="#00C98D"
      d="M0 298.417c56.554 56.553 148.247 56.553 204.801 0 56.554-56.554 56.554-148.247 0-204.801l-25.6 25.6c42.415 42.416 42.415 111.185 0 153.6-42.416 42.416-111.185 42.416-153.601 0L0 298.416Z"
    />
    <path
      fill="#00C98D"
      d="M51.2 247.216c28.277 28.277 74.123 28.277 102.4 0 28.277-28.276 28.277-74.123 0-102.4l-25.6 25.6c14.14 14.138 14.14 37.061 0 51.2-14.138 14.139-37.061 14.139-51.2 0l-25.6 25.6ZM256 42.415c-56.554-56.553-148.247-56.553-204.8 0-56.555 56.555-56.555 148.247 0 204.801l25.599-25.6c-42.415-42.415-42.415-111.185 0-153.6 42.416-42.416 111.185-42.416 153.6 0L256 42.416Z"
    />
    <path
      fill="#00C98D"
      d="M204.8 93.616c-28.276-28.277-74.124-28.277-102.4 0-28.278 28.277-28.278 74.123 0 102.4l25.6-25.6c-14.14-14.138-14.14-37.061 0-51.2 14.138-14.139 37.06-14.139 51.2 0l25.6-25.6Z"
    />
    <path
      fill="#FFF"
      fillOpacity=".4"
      d="M256 42.415c-56.554-56.553-148.247-56.553-204.8 0-56.555 56.555-56.555 148.247 0 204.801l25.599-25.6c-42.415-42.415-42.415-111.185 0-153.6 42.416-42.416 111.185-42.416 153.6 0L256 42.416Z"
    />
    <path
      fill="#FFF"
      fillOpacity=".4"
      d="M204.8 93.616c-28.276-28.277-74.124-28.277-102.4 0-28.278 28.277-28.278 74.123 0 102.4l25.6-25.6c-14.14-14.138-14.14-37.061 0-51.2 14.138-14.139 37.06-14.139 51.2 0l25.6-25.6Z"
    />
  </svg>
);

export const Firebase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="600"
    height="600"
    fill="none"
    viewBox="0 0 600 600"
    {...props}
  >
    <path
      fill="#FF9100"
      d="M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z"
    />
    <path
      fill="#FFC400"
      d="M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z"
    />
    <path
      fill="#FF9100"
      d="M291.39 494.657c14.988-23.986 24.075-52.106 25.133-82.403 2.783-79.695-50.792-148.251-124.942-167.381-.19 3.071-.352 6.143-.46 9.216-3.305 94.651 35.803 180.946 100.269 240.568Z"
    />
    <path
      fill="#DD2C00"
      d="M308.231 20.858C266 54.691 232.652 99.302 212.475 150.693c-11.551 29.436-18.81 61.055-20.929 94.2 74.15 19.13 127.726 87.686 124.943 167.38-1.058 30.297-10.172 58.39-25.134 82.404 28.24 26.127 61.331 47.093 97.868 61.447 73.337-33.9 125.37-106.846 128.383-193.127 1.952-55.901-19.526-105.724-49.875-147.778-32.051-44.477-159.5-194.36-159.5-194.36Z"
    />
  </svg>
);
