import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { PageVisualBanner } from "@/components/sections/PageVisualBanner";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicePortfolioStrip } from "@/components/sections/ServicePortfolioStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { pmuServices } from "@/content/services";
import { businessConfig } from "@/config/business.config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { serviceJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "Tokat Kalıcı Makyaj | Jutenyam",
  description:
    "Tokat Merkez’de kaş mikropigmentasyonu, dudak renklendirme, dipliner ve eyeliner. Jutenyam Tattoo & Piercing.",
  path: "/kalici-makyaj",
});

const cards = [
  {
    href: "/kalici-makyaj/kas-mikropigmentasyonu",
    title: "Kaş mikropigmentasyonu",
    d: "Yüz hatlarına uygun kaş tasarımı ve kişiye göre değerlendirme.",
    image: "/images/portfolio/pmu-eyebrow.webp",
    alt: "Kaş mikropigmentasyonu örneği",
  },
  {
    href: "/kalici-makyaj/dudak-renklendirme",
    title: "Dudak renklendirme ve kontür",
    d: "Renk tercihi kişiye göre planlanır; sonuçlar kişiden kişiye değişebilir.",
    image: "/images/portfolio/pmu-lips.webp",
    alt: "Dudak renklendirme örneği",
  },
  {
    href: "/kalici-makyaj/dipliner-eyeliner",
    title: "Dipliner ve eyeliner",
    d: "Dipliner, klasik ve kuyruklu eyeliner ile yenileme seçenekleri.",
    image: "/images/portfolio/pmu-eyeliner.webp",
    alt: "Dipliner ve eyeliner örneği",
  },
];

export default function KaliciMakyajPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Tokat Kalıcı Makyaj",
          description: "Kaş, dudak ve eyeliner kalıcı makyaj hizmetleri",
          path: "/kalici-makyaj",
        })}
      />
      <PageHero
        eyebrow="Kalıcı Makyaj"
        title="Zarif ve kişiye özel kalıcı makyaj"
        description="Dövme ve piercing ana odağımızdır; kalıcı makyaj aynı marka dilinde, görünür ve özenli sunulur."
        crumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Kalıcı Makyaj", path: "/kalici-makyaj" },
        ]}
      />
      <PageVisualBanner
        image="/images/services/kalici-makyaj.webp"
        alt="Kalıcı makyaj stüdyo çalışması"
        caption="Kaş, dudak ve eyeliner"
      />
      <section className="py-14">
        <div className="container-page">
          <SectionHeading
            title="Hizmetler"
            description="Yalnızca teyit edilmiş kalıcı makyaj hizmetleri listelenir."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="overflow-hidden border border-border bg-surface transition hover:border-accent"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-2xl text-text">{card.title}</h2>
                  <p className="mt-3 text-sm text-muted">{card.d}</p>
                </div>
              </Link>
            ))}
          </div>
          <ul className="mt-10 grid gap-2 sm:grid-cols-2">
            {pmuServices.map((service) => (
              <li key={service.id} className="text-sm text-muted">
                {service.name}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm text-muted">
            {businessConfig.retouchNote}
          </p>
        </div>
      </section>
      <ServicePortfolioStrip
        category="pmu-eyebrow"
        title="Kaş mikropigmentasyonu"
        limit={4}
      />
      <ServicePortfolioStrip
        category="pmu-lips"
        title="Dudak renklendirme"
        limit={4}
      />
      <ServicePortfolioStrip
        category="pmu-eyeliner"
        title="Dipliner ve eyeliner"
        limit={4}
      />
      <CTASection sourcePage="/kalici-makyaj" service="pmu" />
    </>
  );
}
