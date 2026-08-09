import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ExternalSourceCard } from "@/components/ui/ExternalSourceCard";
import { sevgiIziContent } from "@/content/sevgi-izi";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isFeatureEnabled } from "@/lib/utils/feature-flags";
import { notFound } from "next/navigation";

export const metadata = buildPageMetadata({
  title: "Tokat Sevgi İzi Uygulama Noktası | Jutenyam",
  description: "Jutenyam Tattoo & Piercing, Beni Buldular platformunun Tokat’taki ücretsiz Sevgi İzi uygulama noktaları arasındadır.",
  path: "/sevgi-izi",
});

export default function Page() {
  if (!isFeatureEnabled("showSevgiIzi")) notFound();
  return (
    <>
      <PageHero
        title="Sevgi İzi"
        description={sevgiIziContent.verifiedStatement}
        crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Sevgi İzi", path: "/sevgi-izi" }]}
      />
      <section className="py-14">
        <div className="container-page">
          <p className="max-w-3xl text-muted">{sevgiIziContent.summary}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {sevgiIziContent.sources.map((source) => (
              <ExternalSourceCard
                key={source.id}
                title={source.label}
                href={source.href}
                ctaLabel={source.id === "beni-buldular" ? "Uygulama Noktalarını Gör" : "Haberi İncele"}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection sourcePage="/sevgi-izi" />
    </>
  );
}
