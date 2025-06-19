import React from "react";
import { LuBug, LuLayoutDashboard, LuLightbulb } from "react-icons/lu";

const PageContentSidebar = () => {
  const navigationItems = [
    { title: "Usage", href: "#usage" },
    { title: "Installation", href: "#installation" },
    { title: "Props", href: "#props" },
  ];

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

  return (
    <div className="h-full w-full overflow-y-auto py-6 pl-6 pr-2">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">On This Page</p>
          <div>
            {navigationItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.href}
                  className="block pt-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                >
                  {item.title}
                </a>
              </div>
            ))}
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
    </div>
  );
};

export default PageContentSidebar;
