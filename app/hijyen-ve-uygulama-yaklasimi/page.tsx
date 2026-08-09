import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { hygienePractices } from "@/content/services";
import { businessConfig } from "@/config/business.config";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Hijyen ve Uygulama Yaklaşımı | Jutenyam",
  description: "Jutenyam Tattoo & Piercing hijyen uygulamaları ve çalışma yaklaşımı. Tokat Merkez.",
  path: "/hijyen-ve-uygulama-yaklasimi",
});

export default function Page() {
  return (
    <>
      <PageHero
        title="Hijyen ve uygulama yaklaşımı"
        description="Doğrulanmış hijyen uygulamalarımızı abartısız ve net biçimde paylaşıyoruz."
        crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Hijyen ve Uygulama Yaklaşımı", path: "/hijyen-ve-uygulama-yaklasimi" }]}
      />
      <section className="py-14">
        <div className="container-page">
          <ul className="grid gap-3 md:grid-cols-2">
            {hygienePractices.map((item) => (
              <li key={item} className="border border-border bg-surface/40 px-5 py-4 text-sm text-muted">{item}</li>
            ))}
          </ul>
          <div className="mt-10 max-w-3xl space-y-3 text-sm text-muted">
            <p>{businessConfig.aftercareNote}</p>
            <p>{businessConfig.ageConsentNote}</p>
            <p>Kesin sağlık sonucu, acısız uygulama veya yüzde yüz sterilite gibi vaatler kullanmayız.</p>
          </div>
        </div>
      </section>
      <CTASection sourcePage="/hijyen-ve-uygulama-yaklasimi" />
    </>
  );
}
