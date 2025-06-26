import { eliteItems } from "@/contants";

export const getNavigationFeaturedItems = (title: string) => {
  const sorted = [...eliteItems].sort((a, b) => a.name.localeCompare(b.name));
  const index = sorted.findIndex(item => item.name === title);

  const previous = index > 0
    ? { label: sorted[index - 1].name, href: sorted[index - 1].href }
    : undefined;

  const next = index < sorted.length - 1
    ? { label: sorted[index + 1].name, href: sorted[index + 1].href }
    : undefined;

  return { previous, next };
};
