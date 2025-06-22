"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export function useActiveSection(): string {
  const [activeId, setActiveId] = useState("");
  const pathname = usePathname();
  const activeIdRef = useRef(activeId);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    const handleScroll = () => {
      let selectors: string[] = [];

      if (pathname === "/docs/introduction") {
        selectors = ["#introduction", "#philosophy"];
      } else if (pathname === "/docs/install-nextjs" || pathname === "/docs/install-tailwindcss") {
        selectors = ["#installation"];
      } else {
        selectors = ["#preview", "#installation", "#props"];
      }

      const headingElements = selectors
        .map(selector => document.querySelector(selector) as HTMLElement)
        .filter(Boolean);

      if (headingElements.length === 0) return;

      const scrollPosition = window.scrollY + 200;

      let currentActiveId = "";

      for (let i = 0; i < headingElements.length; i++) {
        const element = headingElements[i];
        const elementTop = element.offsetTop;

        if (scrollPosition >= elementTop) {
          currentActiveId = element.id;
        } else {
          break;
        }
      }

      if (!currentActiveId && headingElements.length > 0) {
        currentActiveId = headingElements[0].id;
      }

      if (currentActiveId && currentActiveId !== activeIdRef.current) {
        setActiveId(currentActiveId);
      }
    };

    setActiveId("");

    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 300);

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [pathname]);

  return activeId;
}