"use client";

import { IoMdCheckmark } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedFormProps = {
  delay?: number;
  name?: string;
};

const AnimatedForm = ({
  delay = 7000,
  name = "Alex Morgan",
}: AnimatedFormProps) => {
  const [animationKey, setAnimationKey] = useState(0);

  const delayTime = Math.max(delay, 7000);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, delayTime);

    return () => clearInterval(interval);
  }, [delayTime]);

  return <Animatedform key={animationKey} name={name} />;
};

export default AnimatedForm;

const Animatedform = ({ name }: { name: string }) => {
  const password = "********";
  const circleLength = 2 * Math.PI * 50;

  const nameAnimationDuration = Math.ceil(name.length / 5);
  const passwordAnimationDuration = 2;
  const nameStaggerDelay = nameAnimationDuration / name.length;
  const passwordStaggerDelay = passwordAnimationDuration / password.length;

  const icons = [
    {
      icon: <FaGithub className="size-6 text-primary" />,
      key: "github",
    },
    {
      icon: <ShopifyIcon className="size-6" />,
      key: "shopify",
    },
    {
      icon: <TwitchIcon className="size-6" />,
      key: "twitch",
    },
    {
      icon: <YoutubeIcon className="size-6" />,
      key: "youtube",
    },
  ];

  return (
    <div className={cn("relative", "w-full max-w-[340px]")}>
      <div className="w-full rounded-[12px] border border-neutral-200/60 p-1.5 dark:border-neutral-900/60">
        <div
          className={cn(
            "relative",
            "flex flex-col gap-1 divide-y divide-neutral-200 rounded-lg",
            "border border-neutral-200 dark:divide-neutral-900 dark:border-neutral-900",
          )}
        >
          <div
            className={cn(
              "px-3 pb-2 pt-3 text-[14px] leading-[1rem] tracking-wide text-transparent",
              "bg-gradient-to-r from-neutral-700 to-neutral-300 bg-clip-text dark:from-neutral-400 dark:to-neutral-700",
            )}
          >
            Create Account
          </div>
          <div className="flex flex-col gap-2 p-2">
            <div
              className={cn(
                "w-full rounded-md border p-2",
                "flex items-center justify-between gap-4",
                "bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950",
              )}
            >
              <div className="text-xs">
                {name.split("").map((char, index) => (
                  <motion.span
                    key={`name-${index}`}
                    className="inline-block font-[350]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: index * nameStaggerDelay,
                      ease: "easeOut",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>

              <AnimatedCheckmarkCircle
                circleLength={circleLength}
                strokeDuration={nameAnimationDuration * 3 + 1}
                strokeDelay={0}
                fillDelay={nameAnimationDuration + 0.1}
                checkmarkDelay={nameAnimationDuration + 0.2}
              />
            </div>

            <div
              className={cn(
                "rounded-md border p-2",
                "flex items-center justify-between gap-8",
                "bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950",
              )}
            >
              <div className="font-mono text-xs">
                {password.split("").map((char, index) => (
                  <motion.span
                    key={`password-${index}`}
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay:
                        nameAnimationDuration +
                        0.5 +
                        index * passwordStaggerDelay,
                      ease: "easeOut",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <AnimatedCheckmarkCircle
                circleLength={circleLength}
                strokeDuration={7}
                strokeDelay={nameAnimationDuration + 0.5}
                fillDelay={
                  nameAnimationDuration + passwordAnimationDuration + 0.6
                }
                checkmarkDelay={
                  nameAnimationDuration + passwordAnimationDuration + 0.7
                }
              />
            </div>
            <div
              className={cn(
                "h-[37.6px] rounded-md border opacity-40",
                "bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950",
              )}
            />
          </div>
        </div>
      </div>
      <ContainerMask />
      <div className="absolute bottom-0 left-0 flex h-[50px] w-full items-center justify-around px-6">
        {icons.map(({ icon, key }) => (
          <div
            key={key}
            className="rounded-full bg-gradient-to-b from-neutral-300 to-neutral-100 p-2 dark:from-neutral-700 dark:to-neutral-900"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

type AnimatedCheckmarkCircleProps = {
  circleLength: number;
  strokeDuration: number;
  strokeDelay: number;
  fillDelay: number;
  checkmarkDelay: number;
};

export const AnimatedCheckmarkCircle = ({
  circleLength,
  strokeDuration,
  strokeDelay,
  fillDelay,
  checkmarkDelay,
}: AnimatedCheckmarkCircleProps) => {
  return (
    <div className="relative">
      <svg width="20" height="20" className="rotate-[-90deg]">
        <motion.circle
          cx="10"
          cy="10"
          r="7"
          stroke="#22c55e"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={circleLength}
          strokeDashoffset={circleLength}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: strokeDuration,
            ease: "easeInOut",
            delay: strokeDelay,
          }}
        />
        <motion.circle
          cx="10"
          cy="10"
          r="7"
          fill="#22c55e"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: fillDelay,
          }}
        />
      </svg>
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-background"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: checkmarkDelay,
        }}
      >
        <IoMdCheckmark className="size-2.5" />
      </motion.div>
    </div>
  );
};

const ContainerMask = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 h-[40px] w-full [background-image:linear-gradient(to_top,theme(colors.background)_60%,transparent_100%)]" />
      <div className="absolute bottom-0 left-0 h-[100px] w-[12px] [background-image:linear-gradient(to_top,theme(colors.background)_60%,transparent_100%)]" />
      <div className="absolute bottom-0 right-0 h-[100px] w-[12px] [background-image:linear-gradient(to_top,theme(colors.background)_60%,transparent_100%)]" />
    </>
  );
};

const ShopifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="256"
    height="292"
    viewBox="0 0 256 292"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    fill="currentColor"
    {...props}
  >
    <path
      d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z"
      fill="#95BF46"
    />
    <path
      d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357"
      fill="#5E8E3E"
    />
    <path
      d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338"
      fill="#FFF"
    />
  </svg>
);

const TwitchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2400 2800"
    xmlSpace="preserve"
    fill="currentColor"
    {...props}
  >
    <path fill="#fff" d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z" />
    <g fill="#9146ff">
      <path d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z" />
      <path d="M1700 550h200v600h-200zm-550 0h200v600h-200z" />
    </g>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 180"
    width={256}
    height={180}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    fill="currentColor"
    {...props}
  >
    <path
      d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
      fill="red"
    />
    <path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z" />
  </svg>
);
