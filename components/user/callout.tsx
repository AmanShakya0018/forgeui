import { cn } from "@/lib/utils";
import { ReactNode } from "react";
interface CalloutProps {
  children?: ReactNode;
  type?: "default" | "warning" | "danger";
}
export function Callout({
  children,
  type,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 items-start rounded-md border boder-l-4 p-4 w-full dark:max-w-none",
        {
          "border-red-900 bg-red-50 dark:prose": type === "danger",
          "border-yellow-900 bg-yellow-50 dark:prose": type === "warning",
        }
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}