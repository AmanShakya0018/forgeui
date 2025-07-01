"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MyIcon } from "../icons/logo";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

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
          ? "border-b border-neutral-800/50 bg-neutral-900/40 shadow-lg backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      <div className="mx-auto max-w-7xl px-3 md:px-5 lg:px-8">
        <div className="flex h-[3.7rem] items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-2">
              <MyIcon className="h-5 w-5 text-white" />
              <span className="text-xl font-bold text-white">Forge UI</span>
            </Link>
          </div>

          <div className="hidden items-center space-x-2 lg:flex">
            <div className="flex items-center gap-0.5 opacity-50">
              <GithubLink />
              <TwitterLink />
            </div>
          </div>
          <div className="flex items-center space-x-1 opacity-50 lg:hidden">
            <GithubLink />
            <TwitterLink />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;

function GithubLink() {
  return (
    <Link
      href={"https://github.com/AmanShakya0018/forgeui"}
      target="_blank"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-white hover:bg-neutral-900",
      )}
    >
      <FaGithub className="h-[18px] w-[18px]" />
    </Link>
  );
}
function TwitterLink() {
  return (
    <Link
      href={"https://x.com/AmanShakya0018"}
      target="_blank"
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-white hover:bg-neutral-900",
      )}
    >
      <FaXTwitter className="h-[18px] w-[18px]" />
    </Link>
  );
}
