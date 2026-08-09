import { PageHero } from "@/components/sections/PageHero";
import { PageVisualBanner } from "@/components/sections/PageVisualBanner";
import { CTASection } from "@/components/sections/CTASection";
import { FaqWithAside } from "@/components/sections/FaqWithAside";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicePortfolioStrip } from "@/components/sections/ServicePortfolioStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { piercingBody, piercingEar, piercingFace } from "@/content/services";
import { faqItems } from "@/content/faq";
import { businessConfig } from "@/config/business.config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageJsonLd, serviceJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "Tokat Piercing Uygulamaları | Jutenyam",
  description:
    "Tokat Merkez’de kulak, yüz ve vücut piercingleri, dermal piercing, takı değişimi ve ear styling. Jutenyam Tattoo & Piercing.",
  path: "/piercing",
});

function List({
  title,
  items,
}: {
  title: string;
  items: { id: string; name: string }[];
}) {
  return (
    <div className="border border-border bg-surface/40 p-6">
      <h2 className="font-serif text-2xl text-text">{title}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id} className="text-sm text-muted">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PiercingPage() {
  const faqs = faqItems.filter((item) =>
    ["piercing", "randevu", "fiyatlandirma"].includes(item.category),
  );
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Tokat Piercing",
          description: "Kulak, yüz ve vücut piercing uygulamaları",
          path: "/piercing",
        })}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero
        eyebrow="Piercing"
        title="Tokat’ta piercing uygulamaları"
        description="Kulak kombinasyonlarından yüz ve vücut piercinglerine kadar hijyen odaklı yaklaşım. Tıbbi tedavi talimatı verilmez; bakım bilgisi işlem sonrası kişiye özel paylaşılır."
        crumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Piercing", path: "/piercing" },
        ]}
      />
      <PageVisualBanner
        image="/images/services/piercing.webp"
        alt="Ear styling piercing çalışması"
        caption="Ear styling ve piercing çeşitleri"
      />
      <section className="py-14">
        <div className="container-page space-y-5">
          <List title="Kulak piercingleri ve ear styling" items={piercingEar} />
          <List title="Yüz piercingleri" items={piercingFace} />
          <List
            title="Vücut piercingleri, dermal ve takı değişimi"
            items={piercingBody}
          />
        </div>
      </section>
      <ServicePortfolioStrip
        category="piercing"
        title="Piercing portföyünden seçmeler"
      />
      <section className="border-y border-border bg-surface/40 py-14">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <SectionHeading
            title="Hijyen ve takı yaklaşımı"
            description="Tek kullanımlık sarf malzemeleri, müşteri önünde açılan malzemeler ve uygun materyal standartlarına sahip takı tercihi temel yaklaşımımızdır."
          />
          <div className="space-y-3 text-sm text-muted">
            <p>{businessConfig.pricingNote}</p>
            <p>{businessConfig.aftercareNote}</p>
            <p>{businessConfig.ageConsentNote}</p>
          </div>
        </div>
      </section>
      <FaqWithAside
        title="Sık sorulan sorular"
        items={faqs}
        sourcePage="/piercing"
        asideImage="/images/portfolio/piercing-ear-styling.webp"
        asideImageAlt="Ear styling örneği"
      />
      <CTASection sourcePage="/piercing" service="piercing" />
    </>
  );
}
