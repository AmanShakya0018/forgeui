"use client";
import React, { useEffect, useState } from "react";
import { Themetoggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { GithubLink, TwitterLink } from "../ui/SocialButtons";
import { cn } from "@/lib/utils";

const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > 0) {
      return setIsScrolled(true);
    }

    return setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-fullt ransition-all sticky top-0 z-50 duration-300",
        isScrolled
          ? "border-b bg-background shadow-lg backdrop-blur-md dark:border-neutral-800/50 dark:bg-background/40"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      <div className="mx-auto max-w-7xl px-3 md:px-5 lg:px-8">
        <div className="flex h-[3.7rem] items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-1.5">
              <Image
                src="/logo-ui.png"
                width={500}
                height={500}
                priority={false}
                alt="Logo"
                unoptimized={true}
                className="h-7 w-7 rounded-xl"
              />
              <span className="text-xl font-bold">Forge UI</span>
            </Link>
          </div>

          <div className="hidden items-center space-x-2 lg:flex">
            <div className="flex items-center gap-0.5 opacity-50">
              <GithubLink />
              <TwitterLink />
              <Themetoggle />
            </div>
          </div>
          <div className="flex items-center space-x-1 opacity-50 lg:hidden">
            <Themetoggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
