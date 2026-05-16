import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import PageContentSidebar from "@/components/layout/page-content-sidebar";
import PrimaryItems from "@/components/landing/primaryitems";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Link
        href="https://pro.forgeui.in/"
        target="_blank"
        className="group top-0 flex h-12 w-full items-center justify-center gap-1 bg-linear-to-b from-blue-500 to-blue-600 p-2 text-center text-sm font-semibold text-balance text-white sm:text-[1rem]"
      >
        <span>
          ✨ Introducing ForgeUI Pro - Ship faster with 100+ premium blocks,
          components & templates
        </span>

        <MdKeyboardArrowRight
          className="mt-0.5 hidden transition-transform duration-300 group-hover:translate-x-1 sm:inline"
          size={20}
        />
      </Link>
      <Navbar />
      <div className="items-start gap-3 px-2 md:px-6 lg:flex lg:pr-0 lg:pl-8">
        <aside className="top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 border-r border-neutral-200/60 pb-3 lg:sticky lg:block lg:w-60 lg:overflow-hidden dark:border-neutral-800/60">
          <ScrollArea className="h-full w-full pt-8 pb-2">
            <PrimaryItems />
          </ScrollArea>
        </aside>
        <main className="flex-1 overflow-y-auto px-2 pt-4 pb-8 lg:pr-6 xl:pr-10">
          {children}
        </main>
        <aside className="top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 border-l border-neutral-200/60 pb-3 lg:sticky lg:w-60 lg:overflow-hidden xl:block dark:border-neutral-800/60">
          <PageContentSidebar />
        </aside>
      </div>
      <Footer />
    </section>
  );
}
