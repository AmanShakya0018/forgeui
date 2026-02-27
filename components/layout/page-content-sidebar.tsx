"use client";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";
import { LuBug, LuLightbulb } from "react-icons/lu";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  // {
  //   title: "Request a new component",
  //   href: "https://github.com/amanshakya0018/forgeui/issues/new?title=[feat]:%20%2Fcomponents%2F&labels=enhancement&template=feature_request.md",
  //   icon: LuLayoutDashboard,
  // },
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
    <div className="flex h-full w-full flex-col justify-start gap-6 overflow-y-auto pt-6 pr-2 pl-6">
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
    </div>
  );
};

export default PageContentSidebar;

const ForgeUIProPromo = () => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-neutral-50 ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800/70">
      <div className="relative space-y-4 p-4">
        {/* header */}
        <div className="space-y-1">
          <p className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white">
            ForgeUI Pro
          </p>
          <p className="text-xl font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
            Ship real interfaces, faster
          </p>
        </div>

        {/* value list */}
        <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
          <li className="flex items-start gap-2">
            <span className="mt-1.25 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            5+ complete templates for real products
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.25 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            80+ refined, production-ready components
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

        {/* trust line */}
        <p className="text-xs leading-relaxed text-neutral-400 dark:text-neutral-500">
          For developers who care about speed, polish, and taste.
        </p>
      </div>
    </div>
  );
};
