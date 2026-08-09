"use client";

import Image from "next/image";
import type { PortfolioItem } from "@/content/portfolio";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type PortfolioCardProps = {
  item: PortfolioItem;
  onOpen: (id: string) => void;
};

const statusLabel: Record<PortfolioItem["resultStatus"], string> = {
  fresh: "Yeni Uygulama",
  healed: "İyileşmiş",
  before: "Öncesi",
  after: "Sonrası",
  retouch: "Rötuş",
};

export function PortfolioCard({ item, onOpen }: PortfolioCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item.id)}
      className="group w-full border border-border bg-surface/40 text-left transition hover:border-accent"
    >
      <div className="relative aspect-square overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.alt}
            width={640}
            height={640}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder label={item.title} aspect="square" />
        )}
      </div>
      <div className="p-4">
        <p className="text-xs tracking-[0.14em] text-accent uppercase">
          {statusLabel[item.resultStatus]}
        </p>
        <h3 className="mt-1 font-serif text-xl text-text">{item.title}</h3>
      </div>
    </button>
  );
}
