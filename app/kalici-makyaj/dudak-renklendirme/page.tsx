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
  title: "Tokat Dudak Renklendirme ve Kontür | Jutenyam",
  description:
    "Tokat’ta dudak renklendirme ve dudak kontürü. Renk tercihi kişiye göre değerlendirilir.",
  path: "/kalici-makyaj/dudak-renklendirme",
});

export default function Page() {
  const faqs = faqItems.filter((i) => i.category === "kalici-makyaj");
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Dudak Renklendirme",
          description: "Dudak renklendirme ve kontür",
          path: "/kalici-makyaj/dudak-renklendirme",
        })}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero
        eyebrow="Kalıcı Makyaj"
        title="Dudak renklendirme ve kontür"
        description="Dudak renklendirme daha dengeli bir renk görünümü; kontür ise hatları desteklemek için değerlendirilebilir. Kesin renk sonucu veya kalıcılık süresi vaat edilmez."
        crumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Kalıcı Makyaj", path: "/kalici-makyaj" },
          {
            name: "Dudak Renklendirme",
            path: "/kalici-makyaj/dudak-renklendirme",
          },
        ]}
      />
      <PageVisualBanner
        image="/images/portfolio/pmu-lips.webp"
        alt="Dudak renklendirme"
        caption="Dudak renklendirme ve kontür"
      />
      <section className="py-14">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <SectionHeading
            title="Kişiye göre renk değerlendirmesi"
            description="Doğal dudak rengi, cilt tonu ve istediğiniz görünüm birlikte ele alınır. Sonuçlar kişiden kişiye değişebilir."
          />
          <div className="space-y-3 text-sm text-muted">
            <p>{businessConfig.retouchNote}</p>
            <p>{businessConfig.pricingNote}</p>
          </div>
        </div>
      </section>
      <ServicePortfolioStrip
        category="pmu-lips"
        title="Dudak sonuçları"
        limit={4}
      />
      <FaqWithAside
        title="Sık sorulan sorular"
        items={faqs}
        sourcePage="/kalici-makyaj/dudak-renklendirme"
        asideImage="/images/portfolio/pmu-lips-02.webp"
        asideImageAlt="Dudak kontürü örneği"
      />
      <CTASection
        sourcePage="/kalici-makyaj/dudak-renklendirme"
        service="pmu-lips"
      />
    </>
  );
}
