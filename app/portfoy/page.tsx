import { Suspense } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioFilters } from "@/components/portfolio/PortfolioFilters";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { CTASection } from "@/components/sections/CTASection";
import { portfolioItems } from "@/content/portfolio";
import { filterPortfolioByCategory, parsePortfolioFilter } from "@/lib/utils/portfolio";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isFeatureEnabled } from "@/lib/utils/feature-flags";

export const metadata = buildPageMetadata({
  title: "Dövme, Piercing ve Kalıcı Makyaj Portföyü | Jutenyam",
  description: "Jutenyam Tattoo & Piercing gerçek portföy çalışmaları. Yalnızca izinli görseller yayımlanır.",
  path: "/portfoy",
});

type Props = { searchParams: Promise<{ kategori?: string }> };

export default async function PortfoyPage({ searchParams }: Props) {
  const params = await searchParams;
  let filter = parsePortfolioFilter(params.kategori);
  if (filter === "healed" && !isFeatureEnabled("showHealedPortfolio")) {
    filter = "all";
  }
  const items = filterPortfolioByCategory(portfolioItems, filter);

  return (
    <>
      <PageHero
        eyebrow="Portföy"
        title="Gerçek çalışmalar"
        description="Portföy yalnızca paylaşım izni alınmış görsellerle oluşur. Sahte veya stok iş görseli kullanılmaz."
        crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Portföy", path: "/portfoy" }]}
      />
      <section className="py-12 md:py-16">
        <div className="container-page space-y-8">
          <Suspense fallback={<div className="text-muted">Filtreler yükleniyor…</div>}>
            <PortfolioFilters active={filter} />
          </Suspense>
          <PortfolioGallery items={items} />
        </div>
      </section>
      <CTASection sourcePage="/portfoy" />
    </>
  );
}
