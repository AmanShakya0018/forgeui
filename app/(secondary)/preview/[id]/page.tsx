import { previewMap } from "@/contants/preview-map";

type PreviewId = keyof typeof previewMap;

export async function generateStaticParams() {
  return Object.keys(previewMap).map((id) => ({ id }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ id: PreviewId }>;
}) {
  const { id } = await params;
  const Preview = previewMap[id];
  return <Preview />;
}
