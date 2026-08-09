import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
  { href: "/kalici-makyaj/kas-mikropigmentasyonu", title: "Kaş mikropigmentasyonu", d: "Yüz hatlarına uygun kaş tasarımı ve kişiye göre değerlendirme." },
  { href: "/kalici-makyaj/dudak-renklendirme", title: "Dudak renklendirme ve kontür", d: "Renk tercihi kişiye göre planlanır; sonuçlar kişiden kişiye değişebilir." },
  { href: "/kalici-makyaj/dipliner-eyeliner", title: "Dipliner ve eyeliner", d: "Dipliner, klasik ve kuyruklu eyeliner ile yenileme seçenekleri." },
];

export default function KaliciMakyajPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: "Tokat Kalıcı Makyaj", description: "Kaş, dudak ve eyeliner kalıcı makyaj hizmetleri", path: "/kalici-makyaj" })} />
      <PageHero
        tone="light"
        eyebrow="Kalıcı Makyaj"
        title="Zarif ve kişiye özel kalıcı makyaj"
        description="Dövme ve piercing ana odağımızdır; kalıcı makyaj ise aynı özenle, daha açık ve temiz bir görsel dilde sunulur."
        crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Kalıcı Makyaj", path: "/kalici-makyaj" }]}
      />
      <section className="section-light py-14">
        <div className="container-page">
          <SectionHeading tone="light" title="Hizmetler" description="Yalnızca teyit edilmiş kalıcı makyaj hizmetleri listelenir." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <Link key={card.href} href={card.href} className="border border-[rgba(24,25,29,0.12)] bg-white/50 p-6 text-text-dark transition hover:border-accent-dark">
                <h2 className="font-serif text-2xl">{card.title}</h2>
                <p className="mt-3 text-sm text-[#4a4843]">{card.d}</p>
              </Link>
            ))}
          </div>
          <ul className="mt-10 grid gap-2 sm:grid-cols-2">
            {pmuServices.map((service) => (
              <li key={service.id} className="text-sm text-[#4a4843]">{service.name}</li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm text-[#4a4843]">{businessConfig.retouchNote}</p>
        </div>
      </section>
      <CTASection sourcePage="/kalici-makyaj" service="pmu" />
    </>
  );
}
