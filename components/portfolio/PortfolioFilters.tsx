"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics/track";
import type { PortfolioFilter } from "@/lib/utils/portfolio";
import { cn } from "@/lib/utils/cn";

const filters: Array<{ id: PortfolioFilter; label: string }> = [
  { id: "all", label: "Tümü" },
  { id: "tattoo", label: "Dövme" },
  { id: "piercing", label: "Piercing" },
  { id: "pmu-eyebrow", label: "Kaş Mikropigmentasyonu" },
  { id: "pmu-lips", label: "Dudak Renklendirme" },
  { id: "pmu-eyeliner", label: "Dipliner / Eyeliner" },
  { id: "healed", label: "İyileşmiş Sonuçlar" },
  { id: "cover-up", label: "Cover-up" },
];

type PortfolioFiltersProps = {
  active: PortfolioFilter;
};

export function PortfolioFilters({ active }: PortfolioFiltersProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <nav aria-label="Portföy filtreleri" className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const params = new URLSearchParams(searchParams.toString());
        if (filter.id === "all") params.delete("kategori");
        else params.set("kategori", filter.id);
        const href = params.toString()
          ? `${pathname}?${params.toString()}`
          : pathname;
        const isActive = active === filter.id;

        return (
          <Link
            key={filter.id}
            href={href}
            className={cn(
              "inline-flex min-h-11 items-center border px-4 text-sm font-medium transition",
              isActive
                ? "border-accent bg-accent/15 text-accent"
                : "border-border text-muted hover:border-accent hover:text-accent",
            )}
            aria-current={isActive ? "page" : undefined}
            onClick={() =>
              trackEvent("portfolio_filter", {
                source_page: "/portfoy",
                portfolio_category: filter.id,
              })
            }
          >
            {filter.label}
          </Link>
        );
      })}
    </nav>
  );
}
