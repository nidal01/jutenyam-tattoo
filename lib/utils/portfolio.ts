import type { PortfolioCategory, PortfolioItem } from "@/content/portfolio";

export type PortfolioFilter =
  | "all"
  | PortfolioCategory
  | "healed"
  | "cover-up";

export function filterPublishedPortfolio(
  items: PortfolioItem[],
): PortfolioItem[] {
  return items.filter(
    (item) => item.clientConsent === true && item.published === true,
  );
}

export function filterPortfolioByCategory(
  items: PortfolioItem[],
  filter: PortfolioFilter,
): PortfolioItem[] {
  const published = filterPublishedPortfolio(items);

  switch (filter) {
    case "all":
      return published;
    case "healed":
      return published.filter((item) => item.resultStatus === "healed");
    case "cover-up":
      return published.filter(
        (item) =>
          item.tags.includes("cover-up") ||
          item.subcategory === "cover-up",
      );
    default:
      return published.filter((item) => item.category === filter);
  }
}

export function parsePortfolioFilter(
  value: string | null | undefined,
): PortfolioFilter {
  const allowed: PortfolioFilter[] = [
    "all",
    "tattoo",
    "piercing",
    "pmu-eyebrow",
    "pmu-lips",
    "pmu-eyeliner",
    "healed",
    "cover-up",
  ];
  if (value && (allowed as string[]).includes(value)) {
    return value as PortfolioFilter;
  }
  return "all";
}
