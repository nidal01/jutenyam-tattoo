"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/content/portfolio";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { AccessibleLightbox } from "@/components/portfolio/AccessibleLightbox";
import { EmptyState } from "@/components/ui/EmptyState";
import { trackEvent } from "@/lib/analytics/track";

type PortfolioGalleryProps = {
  items: PortfolioItem[];
};

export function PortfolioGallery({ items }: PortfolioGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <EmptyState
        title="Portföy görselleri hazırlanıyor"
        description="İzinli stüdyo çalışmaları eklendiğinde burada listelenir. Şimdilik WhatsApp üzerinden örnek çalışma sorabilirsiniz."
      />
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <PortfolioCard
            key={item.id}
            item={item}
            onOpen={(id) => {
              setActiveId(id);
              trackEvent("portfolio_item_open", {
                source_page: "/portfoy",
                portfolio_category: item.category,
              });
            }}
          />
        ))}
      </div>
      <AccessibleLightbox
        items={items}
        activeId={activeId}
        onClose={() => setActiveId(null)}
        onNavigate={setActiveId}
      />
    </>
  );
}
