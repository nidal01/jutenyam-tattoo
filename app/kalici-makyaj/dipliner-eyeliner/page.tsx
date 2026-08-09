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
  title: "Tokat Dipliner ve Eyeliner | Jutenyam",
  description:
    "Tokat’ta dipliner, klasik eyeliner, kuyruklu eyeliner ve eyeliner yenileme.",
  path: "/kalici-makyaj/dipliner-eyeliner",
});

export default function Page() {
  const faqs = faqItems.filter((i) => i.category === "kalici-makyaj");
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Dipliner ve Eyeliner",
          description: "Dipliner ve eyeliner uygulamaları",
          path: "/kalici-makyaj/dipliner-eyeliner",
        })}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero
        eyebrow="Kalıcı Makyaj"
        title="Dipliner ve eyeliner"
        description="Dipliner daha ince bir hat; klasik ve kuyruklu eyeliner daha belirgin bir görünüm için tercih edilebilir. Göz sağlığı hakkında teşhis veya tedavi önerisi sunulmaz."
        crumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Kalıcı Makyaj", path: "/kalici-makyaj" },
          {
            name: "Dipliner ve Eyeliner",
            path: "/kalici-makyaj/dipliner-eyeliner",
          },
        ]}
      />
      <PageVisualBanner
        image="/images/portfolio/pmu-eyeliner.webp"
        alt="Dipliner ve eyeliner"
        caption="Dipliner ve eyeliner"
      />
      <section className="py-14">
        <div className="container-page grid gap-4 md:grid-cols-2">
          {[
            ["Dipliner", "Daha doğal ve ince hat görünümü hedefleyen seçenek."],
            ["Klasik eyeliner", "Belirgin çizgi isteyenler için değerlendirilir."],
            [
              "Kuyruklu eyeliner",
              "Makyaj etkisini güçlendirmek isteyenler için.",
            ],
            [
              "Eyeliner yenileme",
              "Önceki uygulamanın güncellenmesi gerektiğinde ele alınır.",
            ],
          ].map(([t, d]) => (
            <article key={t} className="border border-border bg-surface/40 p-6">
              <h2 className="font-serif text-2xl text-text">{t}</h2>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </article>
          ))}
        </div>
        <div className="container-page mt-10 grid gap-6 lg:grid-cols-2">
          <SectionHeading
            title="Kişiye göre değerlendirme"
            description="Göz yapısı ve istediğiniz yoğunluk doğrultusunda uygun seçenek birlikte netleştirilir."
          />
          <p className="text-sm text-muted">{businessConfig.retouchNote}</p>
        </div>
      </section>
      <ServicePortfolioStrip
        category="pmu-eyeliner"
        title="Eyeliner sonuçları"
        limit={4}
      />
      <FaqWithAside
        title="Sık sorulan sorular"
        items={faqs}
        sourcePage="/kalici-makyaj/dipliner-eyeliner"
        asideImage="/images/portfolio/pmu-eyeliner-02.webp"
        asideImageAlt="Klasik eyeliner örneği"
      />
      <CTASection
        sourcePage="/kalici-makyaj/dipliner-eyeliner"
        service="pmu-eyeliner"
      />
    </>
  );
}
