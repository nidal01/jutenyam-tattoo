import Image from "next/image";
import Link from "next/link";
import { portfolioItems, type PortfolioCategory } from "@/content/portfolio";
import { filterPortfolioByCategory } from "@/lib/utils/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServicePortfolioStripProps = {
  category: PortfolioCategory | "cover-up";
  title?: string;
  limit?: number;
};

export function ServicePortfolioStrip({
  category,
  title = "İlgili çalışmalar",
  limit = 6,
}: ServicePortfolioStripProps) {
  const items = filterPortfolioByCategory(portfolioItems, category).slice(
    0,
    limit,
  );
  if (items.length === 0) return null;

  return (
    <section className="border-y border-border bg-surface/40 py-14">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title={title} />
          <Link
            href={`/portfoy?kategori=${category === "cover-up" ? "cover-up" : category}`}
            className="min-h-11 text-sm font-semibold text-accent"
          >
            Portföyde gör →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href="/portfoy"
              className="group border border-border bg-background/40"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={640}
                  height={640}
                  className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <p className="p-3 font-serif text-lg text-text">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
