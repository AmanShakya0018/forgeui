
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NbButtonProps {
  children: ReactNode;
  type?: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
  className?: string;
}

export function NbButton({
  children,
  type,
  className,
  ...props
}: NbButtonProps) {
  return (

    <button
      className={cn(
        "font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
        {
          // Default Button Style
          "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":
            type === "default",

          // Alternative Button Style
          "py-2.5 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700":
            type === "alternative",

          // Dark Button Style
          "text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700":
            type === "dark",

          // Light Button Style
          "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700":
            type === "light",

          // Green Button Style
          "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800":
            type === "green",

          // Red Button Style
          "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900":
            type === "red",

          // Yellow Button Style
          "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900":
            type === "yellow",

          // Purple Button Style
          "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900":
            type === "purple",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
