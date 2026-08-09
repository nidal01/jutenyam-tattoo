import { PageHero } from "@/components/sections/PageHero";
import { PageVisualBanner } from "@/components/sections/PageVisualBanner";
import { CTASection } from "@/components/sections/CTASection";
import { ServicePortfolioStrip } from "@/components/sections/ServicePortfolioStrip";
import { FaqWithAside } from "@/components/sections/FaqWithAside";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/content/faq";
import { businessConfig } from "@/config/business.config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageJsonLd, serviceJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "Tokat Kaş Mikropigmentasyonu | Jutenyam",
  description:
    "Tokat Merkez’de kaş mikropigmentasyonu. Kişiye göre tasarım ve değerlendirme. Jutenyam Tattoo & Piercing.",
  path: "/kalici-makyaj/kas-mikropigmentasyonu",
});

export default function Page() {
  const faqs = faqItems.filter((i) => i.category === "kalici-makyaj");
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Kaş Mikropigmentasyonu",
          description: "Tokat kaş mikropigmentasyonu",
          path: "/kalici-makyaj/kas-mikropigmentasyonu",
        })}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero
        eyebrow="Kalıcı Makyaj"
        title="Kaş mikropigmentasyonu"
        description="Yüz hatlarınıza uygun kaş formu, yoğunluk ve renk yaklaşımı kişiye göre değerlendirilir. Microblading veya teyit edilmemiş teknik adları kullanılmaz."
        crumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Kalıcı Makyaj", path: "/kalici-makyaj" },
          {
            name: "Kaş Mikropigmentasyonu",
            path: "/kalici-makyaj/kas-mikropigmentasyonu",
          },
        ]}
      />
      <PageVisualBanner
        image="/images/portfolio/pmu-eyebrow.webp"
        alt="Kaş mikropigmentasyonu"
        caption="Kaş mikropigmentasyonu"
      />
      <section className="py-14">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <SectionHeading
            title="Tasarım yaklaşımı"
            description="Tek tip bir kaş modeli dayatılmaz. Doğal densite, simetri ve yüz oranları birlikte ele alınır. Sonuçlar cilt tipine göre değişebilir."
          />
          <div className="space-y-3 text-sm text-muted">
            <p>{businessConfig.retouchNote}</p>
            <p>{businessConfig.pricingNote}</p>
            <p>{businessConfig.aftercareNote}</p>
          </div>
        </div>
      </section>
      <ServicePortfolioStrip
        category="pmu-eyebrow"
        title="Kaş sonuçları"
        limit={4}
      />
      <FaqWithAside
        title="Sık sorulan sorular"
        items={faqs}
        sourcePage="/kalici-makyaj/kas-mikropigmentasyonu"
        asideImage="/images/portfolio/pmu-eyebrow-02.webp"
        asideImageAlt="Kaş mikropigmentasyonu örneği"
      />
      <CTASection
        sourcePage="/kalici-makyaj/kas-mikropigmentasyonu"
        service="pmu-eyebrow"
      />
    </>
  );
}
