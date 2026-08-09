import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { tattooStyles } from "@/content/services";
import { faqItems } from "@/content/faq";
import { businessConfig } from "@/config/business.config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageJsonLd, serviceJsonLd } from "@/lib/seo/json-ld";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";

export const metadata = buildPageMetadata({
  title: "Tokat Dövme ve Kişiye Özel Tattoo Tasarımı | Jutenyam",
  description:
    "Tokat Merkez’de kişiye özel dövme tasarımı, fine line, realistik, cover-up ve yenileme. Nuran DELEN — Jutenyam Tattoo & Piercing.",
  path: "/dovme",
});

export default function DovmePage() {
  const faqs = faqItems.filter((item) => ["dovme", "fiyatlandirma", "randevu"].includes(item.category)).slice(0, 6);
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: "Tokat Dövme", description: "Kişiye özel dövme tasarımı ve uygulama", path: "/dovme" })} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero
        eyebrow="Dövme"
        title="Tokat’ta kişiye özel dövme"
        description="Minimal çizgiden cover-up’a kadar tasarımınızı birlikte değerlendiriyoruz. Fiyat webde yayınlanmaz; değerlendirme sonrası paylaşılır."
        crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Dövme", path: "/dovme" }]}
      />
      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeading title="Kişiye özel dövme yaklaşımı" description="Referanslarınız, vücut hattınız ve istediğiniz stil üzerinden özgün bir plan çıkarılır. Hazır şablon dayatılmaz; flash tasarımlar ayrıca değerlendirilebilir." />
          <div className="border border-border bg-surface/40 p-6 text-sm text-muted space-y-3">
            <p>{businessConfig.pricingNote}</p>
            <p>{businessConfig.appointmentPolicy}</p>
            <p>{businessConfig.aftercareNote}</p>
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-surface/40 py-14">
        <div className="container-page">
          <SectionHeading title="Dövme stilleri" description="Stüdyoda sunulan stiller" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tattooStyles.map((style) => (
              <li key={style.id} className="border border-border px-4 py-3 text-sm text-muted">{style.name}</li>
            ))}
          </ul>
        </div>
      </section>
      <FeaturedPortfolio />
      <section className="py-14">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            { t: "Cover-up ve yenileme", d: "Eski dövmenin durumu, renk yoğunluğu ve istenen yeni tasarım birlikte değerlendirilir. Uygunluk her çalışmada ayrıdır." },
            { t: "Flash tasarım yaklaşımı", d: "Hazır flash seçenekleri müsaitliğe göre paylaşılabilir. Kişiye özel uyarlama ihtiyacı görüşmede netleşir." },
            { t: "Fiyatı etkileyen unsurlar", d: "Tasarım boyutu, detay seviyesi, uygulama bölgesi, renk kullanımı, cover-up gereksinimi ve seans ihtiyacı fiyatı etkiler." },
          ].map((item) => (
            <article key={item.t} className="border border-border p-6">
              <h2 className="font-serif text-2xl text-text">{item.t}</h2>
              <p className="mt-3 text-sm text-muted">{item.d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-surface/40 py-14">
        <div className="container-page">
          <SectionHeading title="Randevu öncesinde paylaşabileceğiniz bilgiler" description="Stil, yaklaşık boyut, bölge ve varsa referans görseller değerlendirmeyi hızlandırır. Cover-up için mevcut dövmenin net fotoğrafı faydalıdır." />
          <div className="mt-8 max-w-3xl">
            <FAQAccordion items={faqs} sourcePage="/dovme" />
          </div>
        </div>
      </section>
      <CTASection sourcePage="/dovme" service="tattoo" />
    </>
  );
}
