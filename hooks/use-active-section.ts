"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useActiveSection(): string {
  const [activeId, setActiveId] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver;

    const initObserver = () => {
      const targets = Array.from(document.querySelectorAll("[id]")) as HTMLElement[];
      if (!targets.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

          if (visible.length > 0) {
            setActiveId(visible[0].target.id);
          }
        },
        {
          rootMargin: "0% 0% -70% 0%",
          threshold: 0.1,
        }
      );

      targets.forEach((el) => observer.observe(el));
    };

    const timeout = setTimeout(initObserver, 100);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return activeId;
}
