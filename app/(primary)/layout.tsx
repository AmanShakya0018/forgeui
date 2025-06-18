import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PrimaryItems from "@/components/primaryitems";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar />
      <div className="mx-auto max-w-[95.8rem] items-start gap-3 border-x px-8 lg:flex">
        <aside className="top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 border-r pb-3 lg:sticky lg:block lg:w-[240px] lg:overflow-hidden">
          <ScrollArea className="h-full w-full pb-2 pt-8">
            <PrimaryItems />
          </ScrollArea>
        </aside>
        <main className="flex-1 overflow-y-auto pb-8 pl-4 pr-16 pt-4">
          {children}
        </main>
      </div>
      <Footer />
    </section>
  );
}
