import { items } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";

interface ItemPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getItemFromParams(params: { slug: string[] }) {
  const slug = params.slug.join("/");
  const item = items.find((item) => item.slugAsParams === slug);
  return item;
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return Promise.resolve(items.map((item) => ({ slug: item.slugAsParams.split("/") })));
}

export default async function ItemPage({ params }: ItemPageProps) {
  const resolvedParams = await params;
  const item = await getItemFromParams(resolvedParams);

  if (!item || !item.published) {
    notFound();
  }

  return (
    <article className="container lg:pl-8 py-6 prose dark:prose-invert max-w-6xl mx-auto">
      <h1 className="mb-2 text-4xl font-extrabold">{item.title}</h1>
      {item.description ? (
        <p className="text-lg mt-0 text-gray-400">{item.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={item.body} />
    </article>
  );
}
