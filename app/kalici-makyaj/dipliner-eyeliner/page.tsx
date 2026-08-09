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
  title: "Tokat Dipliner ve Eyeliner | Jutenyam",
  description: "Tokat’ta dipliner, klasik eyeliner, kuyruklu eyeliner ve eyeliner yenileme.",
  path: "/kalici-makyaj/dipliner-eyeliner",
});

export default function Page() {
  const faqs = faqItems.filter((i) => i.category === "kalici-makyaj");
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: "Dipliner ve Eyeliner", description: "Dipliner ve eyeliner uygulamaları", path: "/kalici-makyaj/dipliner-eyeliner" })} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero tone="light" eyebrow="Kalıcı Makyaj" title="Dipliner ve eyeliner" description="Dipliner daha ince bir hat; klasik ve kuyruklu eyeliner daha belirgin bir görünüm için tercih edilebilir. Göz sağlığı hakkında teşhis veya tedavi önerisi sunulmaz." crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Kalıcı Makyaj", path: "/kalici-makyaj" }, { name: "Dipliner ve Eyeliner", path: "/kalici-makyaj/dipliner-eyeliner" }]} />
      <section className="section-light py-14">
        <div className="container-page grid gap-4 md:grid-cols-2">
          {[
            ["Dipliner", "Daha doğal ve ince hat görünümü hedefleyen seçenek."],
            ["Klasik eyeliner", "Belirgin çizgi isteyenler için değerlendirilir."],
            ["Kuyruklu eyeliner", "Makyaj etkisini güçlendirmek isteyenler için."],
            ["Eyeliner yenileme", "Önceki uygulamanın güncellenmesi gerektiğinde ele alınır."],
          ].map(([t, d]) => (
            <article key={t} className="border border-[rgba(24,25,29,0.12)] bg-white/40 p-6">
              <h2 className="font-serif text-2xl text-text-dark">{t}</h2>
              <p className="mt-2 text-sm text-[#4a4843]">{d}</p>
            </article>
          ))}
        </div>
        <div className="container-page mt-10 grid gap-6 lg:grid-cols-2">
          <SectionHeading tone="light" title="Kişiye göre değerlendirme" description="Göz yapısı ve istediğiniz yoğunluk doğrultusunda uygun seçenek birlikte netleştirilir." />
          <p className="text-sm text-[#4a4843]">{businessConfig.retouchNote}</p>
        </div>
        <div className="container-page mt-10 max-w-3xl">
          <FAQAccordion items={faqs} sourcePage="/kalici-makyaj/dipliner-eyeliner" />
        </div>
      </section>
      <CTASection sourcePage="/kalici-makyaj/dipliner-eyeliner" service="pmu-eyeliner" />
    </>
  );
}
