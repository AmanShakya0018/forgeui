import Link from "next/link";

const LandingFooter = () => {
  return (
    <div className="relative">
      <div className="mx-auto w-full max-w-7xl px-8 py-5">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <p className="text-[13px] text-white/70">
            &#169; {new Date().getFullYear()},{" "}
            <Link
              href="https://amanshakya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 hover:text-white"
            >
              Forge/ui
            </Link>
          </p>
          <div className="flex gap-5">
            <div className="flex gap-5">
              <Link
                href={"/components/animated-form"}
                className="w-fit px-1 text-[13px] text-white/70 duration-200 hover:text-white"
              >
                Components
              </Link>
              <Link
                href={"/docs/introduction"}
                className="w-fit px-1 text-[13px] text-white/70 duration-200 hover:text-white"
              >
                Docs
              </Link>
              <div aria-hidden className="h-[21px] w-[1px] bg-neutral-700" />
              <Link
                href="https://github.com/amanshakya0018/forgeui"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-1 text-[13px] text-white/70 duration-200 hover:text-white"
              >
                GitHub
              </Link>
              <Link
                href="https://x.com/amanshakya0018"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-1 text-[13px] text-white/70 duration-200 hover:text-white"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-16 bottom-0 h-[100px] bg-[radial-gradient(94.69%_94.69%_at_50%_100%,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0)_55.45%)] md:h-[432px]"
      ></div>
    </div>
  );
};

export default LandingFooter;
