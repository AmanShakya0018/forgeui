"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsContext = React.createContext<string>("");

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ ...props }, ref) => {
  const uniqueId = React.useId();

  return (
    <TabsContext.Provider value={uniqueId}>
      <Tabs ref={ref} {...props} />
    </TabsContext.Provider>
  );
});
TabsRoot.displayName = "TabsRoot";

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-[44px] w-full items-center justify-start gap-5 rounded-t-lg bg-background pl-3",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    classNameIndicator?: string;
  }
>(({ className, children, classNameIndicator, ...props }, ref) => {
  const internalRef = React.useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = React.useState(false);
  const tabsId = React.useContext(TabsContext);

  // Forward the ref
  React.useImperativeHandle(ref, () => internalRef.current!);

  React.useEffect(() => {
    const element = internalRef.current;

    if (element) {
      setIsActive(element.dataset.state === "active");

      const observer = new MutationObserver(() => {
        setIsActive(element.dataset.state === "active");
      });

      observer.observe(element, { attributes: true });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <TabsPrimitive.Trigger
      ref={internalRef}
      className={cn(
        "focus-visible:outline-hidden group relative inline-flex h-10 items-center justify-center whitespace-nowrap rounded-none bg-transparent py-1 pb-2 pt-2 text-sm font-medium text-neutral-500 transition-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-primary",
        className,
      )}
      {...props}
    >
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            layoutId={`underline-${tabsId}`}
            className={cn(
              "absolute -bottom-[3.5px] flex h-0.5 w-full justify-center",
              classNameIndicator,
            )}
            transition={{
              type: "spring",
              duration: 0.3,
              bounce: 0,
            }}
          >
            <div className="h-0.5 w-full rounded-full bg-primary/90" />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </TabsPrimitive.Trigger>
  );
});

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "relative rounded-md pt-4 ring-offset-blue-50 focus-visible:outline-none",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent };
