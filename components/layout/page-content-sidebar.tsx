/* eslint-disable @next/next/no-img-element */
"use client";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";
import { LuBug, LuLayoutDashboard, LuLightbulb } from "react-icons/lu";
import React from "react";
import Link from "next/link";

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
  if (
    pathname === "/docs/install-nextjs" ||
    pathname === "/docs/install-tailwindcss"
  ) {
    navigationItems = [
      { title: "Installation", href: "#installation" },
      {
        title: "View Source",
        href: "",
      },
    ];
  }

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-y-auto py-6 pl-6 pr-2">
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
                        : "text-neutral-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
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
                  className="flex items-center gap-3 pt-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative w-fit">
        <Link
          href="https://www.nextjsshop.com/?ref=forgeui&utm_source=forgeui"
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          <img
            src="/nextjsshop-ad-banner.png"
            alt="NextJsShop Ad Banner"
            className="w-[200px] rounded-md border border-neutral-200 transition hover:opacity-90 dark:border-neutral-800"
          />

          <span className="group absolute bottom-0 left-0 rounded-bl-md bg-neutral-200 p-[2px] text-[0.7rem] font-semibold text-primary/80 dark:bg-neutral-800">
            AD
            <span className="absolute -top-7 left-[4px] hidden w-[100px] rounded-md bg-neutral-200 px-2 py-1 text-[0.7rem] text-primary/80 shadow-md transition-all duration-100 group-hover:block dark:bg-neutral-800">
              Paid promotion
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PageContentSidebar;
