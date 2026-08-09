import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/content/faq";
import { businessConfig } from "@/config/business.config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageJsonLd, serviceJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "Tokat Dudak Renklendirme ve Kontür | Jutenyam",
  description: "Tokat’ta dudak renklendirme ve dudak kontürü. Renk tercihi kişiye göre değerlendirilir.",
  path: "/kalici-makyaj/dudak-renklendirme",
});

export default function Page() {
  const faqs = faqItems.filter((i) => i.category === "kalici-makyaj");
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: "Dudak Renklendirme", description: "Dudak renklendirme ve kontür", path: "/kalici-makyaj/dudak-renklendirme" })} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero tone="light" eyebrow="Kalıcı Makyaj" title="Dudak renklendirme ve kontür" description="Dudak renklendirme daha dengeli bir renk görünümü; kontür ise hatları desteklemek için değerlendirilebilir. Kesin renk sonucu veya kalıcılık süresi vaat edilmez." crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Kalıcı Makyaj", path: "/kalici-makyaj" }, { name: "Dudak Renklendirme", path: "/kalici-makyaj/dudak-renklendirme" }]} />
      <section className="section-light py-14">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <SectionHeading tone="light" title="Kişiye göre renk değerlendirmesi" description="Doğal dudak rengi, cilt tonu ve istediğiniz görünüm birlikte ele alınır. Sonuçlar kişiden kişiye değişebilir." />
          <div className="space-y-3 text-sm text-[#4a4843]">
            <p>{businessConfig.retouchNote}</p>
            <p>{businessConfig.pricingNote}</p>
          </div>
        </div>
        <div className="container-page mt-10 max-w-3xl">
          <FAQAccordion items={faqs} sourcePage="/kalici-makyaj/dudak-renklendirme" />
        </div>
      </section>
      <CTASection sourcePage="/kalici-makyaj/dudak-renklendirme" service="pmu-lips" />
    </>
  );
}
