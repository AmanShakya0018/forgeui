"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { PiBell } from "react-icons/pi";
import { FiRefreshCcw } from "react-icons/fi";
import { FaTools, FaUserFriends } from "react-icons/fa";
import { MdKeyboardArrowDown, MdSecurity } from "react-icons/md";
import { motion, AnimatePresence, type Variants } from "motion/react";

type Notification = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  icon: React.ReactNode;
};

type NotificationPanelProps = {
  notifications?: Notification[];
};

const defaultNotifications: Notification[] = [
  {
    id: "maintenance",
    title: "Scheduled Downtime",
    description: "Servers will be offline tonight at 11 PM.",
    timestamp: "5 min ago",
    icon: <FaTools className="h-5 w-5" />,
  },
  {
    id: "update",
    title: "System Update",
    description: "Your app was updated to v2.3.1.",
    timestamp: "20 min ago",
    icon: <FiRefreshCcw className="h-5 w-5" />,
  },
  {
    id: "invite",
    title: "New Invite!",
    description: "You've been added to the Design Team.",
    timestamp: "1 hour ago",
    icon: <FaUserFriends className="h-5 w-5" />,
  },
  {
    id: "alert",
    title: "Security Alert",
    description: "Unrecognized login attempt detected.",
    timestamp: "6 hours ago",
    icon: <MdSecurity className="h-5 w-5" />,
  },
];

const NotificationPanel = ({
  notifications = defaultNotifications,
}: NotificationPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-105 rounded-lg p-1.5",
        "border border-neutral-200/70 dark:border-neutral-900/70",
      )}
    >
      <div
        className={cn(
          "divide-y divide-neutral-200/80 dark:divide-neutral-800/50",
          "ring-1 ring-neutral-200 dark:ring-neutral-800/50",
          "overflow-hidden rounded-[8px] shadow-[0_2px_2px_rgb(0,0,0,0.1)]",
          "bg-linear-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950",
        )}
      >
        <motion.div
          className={cn("flex min-h-16.75 items-center justify-between px-4")}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-[6px]",
                "border border-neutral-200/60 dark:border-neutral-800/60",
                "bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900",
                "dark:bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.1),transparent_70%)]",
              )}
            >
              <PiBell className="h-5.5 w-5.5 text-neutral-400 dark:text-neutral-300" />
            </div>

            <div className="flex flex-col">
              <p className="text-[0.9rem] font-semibold text-neutral-900 dark:text-neutral-100">
                {notifications.length} New Notifications
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Recent notifications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsOpen((prev) => !prev)}
              className={cn(
                "flex items-center justify-center",
                "h-7.5 w-7.5 rounded-full transition-all duration-300",
                "bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <motion.span
                animate={{ rotateX: isOpen ? 180 : 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                  ease: "easeInOut",
                }}
              >
                <MdKeyboardArrowDown className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
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
              <div className="px-2 py-1">
                {notifications.map((notification) => (
                  <motion.div key={notification.id}>
                    <motion.div className="cursor-pointer rounded-lg p-2 transition-all duration-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/30">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-[6px]",
                            "border border-neutral-200/60 dark:border-neutral-800/60",
                            "bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900",
                            "text-neutral-400 dark:text-neutral-300",
                          )}
                        >
                          {notification.icon}
                        </motion.div>

                        <motion.div
                          variants={itemVariant}
                          initial="close"
                          animate="open"
                          exit="close"
                          className="flex flex-1 flex-col"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-neutral-900 sm:text-[0.9rem] dark:text-neutral-100">
                              {notification.title}
                            </span>
                            <span className="text-[10px] text-neutral-500 sm:text-xs dark:text-neutral-400">
                              {notification.timestamp}
                            </span>
                          </div>
                          <span className="text-[10px] text-neutral-600 sm:text-xs dark:text-neutral-400">
                            {notification.description}
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

export default NotificationPanel;
