import { PageHero } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqCategories, faqItems } from "@/content/faq";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "Sık Sorulan Sorular | Jutenyam Tattoo & Piercing",
  description: "Randevu, fiyatlandırma, dövme, piercing ve kalıcı makyaj hakkında sık sorulan sorular.",
  path: "/sss",
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <PageHero
        title="Sık sorulan sorular"
        description="Kısa ve net yanıtlar. Kesin olmayan alanlarda ihtiyatlı anlatım kullanılır."
        crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "SSS", path: "/sss" }]}
      />
      <section className="py-14">
        <div className="container-page space-y-10">
          {faqCategories.map((category) => {
            const items = faqItems.filter((item) => item.category === category.id);
            if (items.length === 0) return null;
            return (
              <div key={category.id}>
                <h2 className="mb-4 font-serif text-3xl text-text">{category.label}</h2>
                <FAQAccordion items={items} sourcePage="/sss" />
              </div>
            );
          })}
        </div>
      </section>
      <CTASection sourcePage="/sss" />
    </>
  );
}
