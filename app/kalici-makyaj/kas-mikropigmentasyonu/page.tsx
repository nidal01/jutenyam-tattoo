import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ServicePortfolioStrip } from "@/components/sections/ServicePortfolioStrip";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/content/faq";
import { businessConfig } from "@/config/business.config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageJsonLd, serviceJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "Tokat Kaş Mikropigmentasyonu | Jutenyam",
  description: "Tokat Merkez’de kaş mikropigmentasyonu. Kişiye göre tasarım ve değerlendirme. Jutenyam Tattoo & Piercing.",
  path: "/kalici-makyaj/kas-mikropigmentasyonu",
});

export default function Page() {
  const faqs = faqItems.filter((i) => i.category === "kalici-makyaj");
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: "Kaş Mikropigmentasyonu", description: "Tokat kaş mikropigmentasyonu", path: "/kalici-makyaj/kas-mikropigmentasyonu" })} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero tone="light" eyebrow="Kalıcı Makyaj" title="Kaş mikropigmentasyonu" description="Yüz hatlarınıza uygun kaş formu, yoğunluk ve renk yaklaşımı kişiye göre değerlendirilir. Microblading veya teyit edilmemiş teknik adları kullanılmaz." crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Kalıcı Makyaj", path: "/kalici-makyaj" }, { name: "Kaş Mikropigmentasyonu", path: "/kalici-makyaj/kas-mikropigmentasyonu" }]} />
      <section className="section-light py-14">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <SectionHeading tone="light" title="Tasarım yaklaşımı" description="Tek tip bir kaş modeli dayatılmaz. Doğal densite, simetri ve yüz oranları birlikte ele alınır. Sonuçlar cilt tipine göre değişebilir." />
          <div className="space-y-3 text-sm text-[#4a4843]">
            <p>{businessConfig.retouchNote}</p>
            <p>{businessConfig.pricingNote}</p>
            <p>{businessConfig.aftercareNote}</p>
          </div>
        </div>
        <div className="container-page mt-10 max-w-3xl">
          <FAQAccordion items={faqs} sourcePage="/kalici-makyaj/kas-mikropigmentasyonu" />
        </div>
      </section>
      <ServicePortfolioStrip category="pmu-eyebrow" title="Kaş sonuçları" limit={3} />
      <CTASection sourcePage="/kalici-makyaj/kas-mikropigmentasyonu" service="pmu-eyebrow" />
    </>
  );
}
