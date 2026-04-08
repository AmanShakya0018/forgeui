"use client";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";
import { LuBug, LuLayoutDashboard, LuLightbulb } from "react-icons/lu";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const contributeItems = [
  {
    title: "Report an issue",
    href: "https://github.com/amanshakya0018/forgeui/issues/new?title=[bug]:%20%2Fcomponents%2F&labels=bug&labels=documentation&template=bug_report.md",
    icon: LuBug,
  },
  {
    title: "Request a feature",
    href: "https://github.com/amanshakya0018/forgeui/issues/new?title=[feat]:%20%2Fcomponents%2F&labels=enhancement&template=feature_request.md",
    icon: LuLightbulb,
  },
  {
    title: "Request a new component",
    href: "https://github.com/amanshakya0018/forgeui/issues/new?title=[feat]:%20%2Fcomponents%2F&labels=enhancement&template=feature_request.md",
    icon: LuLayoutDashboard,
  },
];

const PageContentSidebar = () => {
  const pathname = usePathname();
  const activeId = useActiveSection();

  let navigationItems = [
    { title: "Preview", href: "#preview" },
    { title: "Installation", href: "#installation" },
    { title: "Props", href: "#props" },
  ];

  if (pathname === "/docs/introduction") {
    navigationItems = [
      { title: "Introduction", href: "#introduction" },
      { title: "Philosophy", href: "#philosophy" },
    ];
  }
  if (pathname === "/docs/installation") {
    navigationItems = [
      { title: "Installation", href: "#installation" },
      {
        title: "View Source",
        href: "",
      },
    ];
  }

  return (
    <div className="sticky top-16 h-[calc(100vh-4rem)] w-full">
      <ScrollArea className="h-full pr-4">
        <div className="flex flex-col gap-6 pt-6 pb-4 pl-3">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">On This Page</p>
              <div>
                {navigationItems.map((item, index) => {
                  const isActive = activeId === item.href.replace("#", "");
                  return (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className={`block pt-2 text-sm transition-colors duration-200 ${
                          isActive
                            ? "font-semibold text-black dark:text-white"
                            : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Contribute</p>
              <div>
                {contributeItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="flex items-center gap-3 pt-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <ForgeUIProPromo />
          <ShadcnStudioPromo />
        </div>
      </ScrollArea>
    </div>
  );
};

export default PageContentSidebar;

const ForgeUIProPromo = () => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800/70">
      <div className="relative space-y-4 p-4">
        <div className="space-y-1">
          <p className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white">
            ForgeUI Pro
          </p>
          <p className="text-xl font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
            Ship real interfaces, faster
          </p>
        </div>

        <ul className="space-y-2 text-[13px] text-neutral-900 dark:text-neutral-100">
          <li className="flex items-start gap-2">
            <span className="mt-1.25 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            7+ complete templates for real products
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.25 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            100+ refined, production-ready components
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.25 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            Copy, paste, and move on with your life
          </li>
        </ul>

        <Link
          href="https://pro.forgeui.in"
          target="_blank"
          className={cn(
            "relative flex cursor-pointer items-center justify-center",
            "rounded-sm bg-neutral-950 px-4 py-3 text-xs font-medium text-white",
            "dark:bg-neutral-50 dark:text-neutral-900",
            "overflow-hidden hover:bg-black dark:hover:bg-white",

            "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[30%] after:w-full hover:after:h-[20%]",
            "after:bg-linear-to-t after:from-white/35 after:to-transparent dark:after:from-black/20",
            "transition-all duration-300",
          )}
        >
          Unlock lifetime access
        </Link>

        <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          For developers who care about speed, polish, and taste.
        </p>
      </div>
    </div>
  );
};

const ShadcnStudioPromo = () => {
  return (
    <a
      href="https://shadcnstudio.com/?utm_source=forgeui&utm_medium=banner&utm_campaign=forgeui"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group"
    >
      <section className="text-muted-foreground space-y-4 rounded-md border border-dashed px-4 py-6 transition-colors group-hover:text-current group-active:text-current">
        <header className="mx-auto flex items-center justify-center gap-2">
          <svg
            viewBox="0 0 328 329"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8"
            aria-hidden="true"
          >
            <rect
              y="0.5"
              width="328"
              height="328"
              rx="164"
              fill="currentColor"
            ></rect>
            <path
              d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288"
              strokeWidth="20"
              className="stroke-background"
            ></path>
            <path
              d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771"
              strokeWidth="20"
              className="stroke-background"
            ></path>
            <line
              x1="238.136"
              y1="98.8184"
              x2="196.76"
              y2="139.707"
              strokeWidth="20"
              className="stroke-background"
            ></line>
            <line
              x1="135.688"
              y1="200.957"
              x2="94.3128"
              y2="241.845"
              strokeWidth="20"
              className="stroke-background"
            ></line>
            <line
              x1="133.689"
              y1="137.524"
              x2="92.5566"
              y2="96.3914"
              strokeWidth="20"
              className="stroke-background"
            ></line>
            <line
              x1="237.679"
              y1="241.803"
              x2="196.547"
              y2="200.671"
              strokeWidth="20"
              className="stroke-background"
            ></line>
          </svg>
          <div className="flex flex-col">
            <span className="text-sm leading-tight font-medium">
              shadcnstudio.com
            </span>
            <span className="text-muted-foreground text-xs">
              shadcn blocks &amp; templates
            </span>
          </div>
        </header>
        <p className="text-muted-foreground text-center text-xs">
          Accelerate your project development with ready-to-use, and fully
          customizable shadcn ui Components, Blocks, UI Kits, Boilerplates,
          Templates and Themes with AI Tools 🪄.
        </p>
      </section>
    </a>
  );
};
