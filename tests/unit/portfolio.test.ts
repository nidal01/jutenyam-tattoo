import { describe, expect, it } from "vitest";
import type { PortfolioItem } from "@/content/portfolio";
import {
  filterPortfolioByCategory,
  filterPublishedPortfolio,
  parsePortfolioFilter,
} from "@/lib/utils/portfolio";

const sample: PortfolioItem[] = [
  {
    id: "1",
    slug: "a",
    title: "A",
    category: "tattoo",
    tags: ["cover-up"],
    image: "/a.jpg",
    alt: "a",
    resultStatus: "fresh",
    clientConsent: true,
    published: true,
    featured: true,
    serviceUrl: "/dovme",
  },
  {
    id: "2",
    slug: "b",
    title: "B",
    category: "piercing",
    tags: [],
    image: "/b.jpg",
    alt: "b",
    resultStatus: "healed",
    clientConsent: false,
    published: true,
    featured: false,
    serviceUrl: "/piercing",
  },
  {
    id: "3",
    slug: "c",
    title: "C",
    category: "tattoo",
    tags: [],
    image: "/c.jpg",
    alt: "c",
    resultStatus: "healed",
    clientConsent: true,
    published: true,
    featured: false,
    serviceUrl: "/dovme",
  },
];

describe("portfolio filters", () => {
  it("requires consent and published", () => {
    expect(filterPublishedPortfolio(sample)).toHaveLength(2);
  });

  it("filters by category and healed/cover-up", () => {
    expect(filterPortfolioByCategory(sample, "tattoo")).toHaveLength(2);
    expect(filterPortfolioByCategory(sample, "healed")).toHaveLength(1);
    expect(filterPortfolioByCategory(sample, "cover-up")).toHaveLength(1);
  });

  it("parses query filter safely", () => {
    expect(parsePortfolioFilter("tattoo")).toBe("tattoo");
    expect(parsePortfolioFilter("unknown")).toBe("all");
  });
});
