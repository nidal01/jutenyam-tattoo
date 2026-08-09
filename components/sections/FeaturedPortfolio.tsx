import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/content/portfolio";
import { filterPublishedPortfolio } from "@/lib/utils/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmptyState } from "@/components/ui/EmptyState";

export function FeaturedPortfolio() {
  const featured = filterPublishedPortfolio(portfolioItems)
    .filter((item) => item.featured)
    .slice(0, 12);

  return (
    <section className="section-dark py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portföy"
          title="Öne çıkan çalışmalar"
          description="Dövme, piercing ve kalıcı makyajdan seçilmiş çalışmalar. Gerçek müşteri fotoğrafları eklendikçe güncellenir."
        />
        <div className="mt-8">
          {featured.length === 0 ? (
            <EmptyState
              title="Öne çıkan çalışmalar yakında"
              description="Portföy görselleri eklendiğinde burada listelenir."
            />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((item) => (
                <Link
                  key={item.id}
                  href="/portfoy"
                  className="group border border-border bg-surface/40 transition hover:border-accent"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.thumbnail ?? item.image}
                      alt={item.alt}
                      width={640}
                      height={640}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs tracking-[0.14em] text-accent uppercase">
                      {item.category === "tattoo"
                        ? "Dövme"
                        : item.category === "piercing"
                          ? "Piercing"
                          : "Kalıcı Makyaj"}
                    </p>
                    <p className="mt-1 font-serif text-lg text-text">
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          href="/portfoy"
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-accent"
        >
          Tüm portföyü gör →
        </Link>
      </div>
    </section>
  );
}
