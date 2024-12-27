import { ScrollArea } from "@/components/ui/scroll-area";
import PrimaryItems from "@/components/primaryitems";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:flex max-w-[88rem] mx-auto relative md:px-1 items-start gap-3">
      <aside className="hidden pt-10 pl-6 lg:sticky lg:top-0 lg:overflow-hidden lg:block lg:w-[240px] lg:max-w-[240px] lg:min-w-[240px] h-screen">
        <ScrollArea className="h-full flex flex-col w-full gap-4 pr-2 py-6 lg:py-8">
          <PrimaryItems />
        </ScrollArea>
      </aside>
      <main className="flex-1 overflow-y-auto pt-12 pb-8 px-3">{children}</main>
    </div>

  );
}

