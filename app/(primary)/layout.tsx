import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PrimaryItems from "@/components/primaryitems";
import { ScrollArea } from "@/components/ui/scroll-area";
import PageContentSidebar from "@/components/page-content-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar />
      <div className="mx-auto max-w-[95.8rem] items-start gap-3 border-x px-2 md:px-6 lg:flex lg:px-8">
        <aside className="top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 border-r pb-3 lg:sticky lg:block lg:w-[240px] lg:overflow-hidden">
          <ScrollArea className="h-full w-full pb-2 pt-8">
            <PrimaryItems />
          </ScrollArea>
        </aside>
        <main className="flex-1 overflow-y-auto px-1 pb-8 pt-4 lg:pr-6 xl:pr-10">
          {children}
        </main>
        <aside className="top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 border-l pb-3 lg:sticky lg:w-[240px] lg:overflow-hidden xl:block">
          <PageContentSidebar />
        </aside>
      </div>
      <Footer />
    </section>
  );
}
