import Link from "next/link";
import { portfolioItems } from "@/content/portfolio";
import { filterPublishedPortfolio } from "@/lib/utils/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EmptyState } from "@/components/ui/EmptyState";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

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
          description="Yalnızca paylaşım izni alınan gerçek çalışmalar gösterilir. Görsel yoksa stok fotoğraf kullanılmaz."
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
                <div key={item.id} className="border border-border p-2">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.thumbnail ?? item.image}
                      alt={item.alt}
                      width={480}
                      height={480}
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <ImagePlaceholder label={item.title} />
                  )}
                  <p className="mt-3 px-1 font-serif text-lg">{item.title}</p>
                </div>
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
