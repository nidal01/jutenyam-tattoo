import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { ArtistIntro } from "@/components/sections/ArtistIntro";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { HygienePreview } from "@/components/sections/HygienePreview";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { SevgiIziPreview } from "@/components/sections/SevgiIziPreview";
import { BlogCard } from "@/components/sections/BlogCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFeaturedBlogPosts } from "@/content/blog";
import { faqItems } from "@/content/faq";
import {
  localBusinessJsonLd,
  personJsonLd,
  webSiteJsonLd,
} from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Jutenyam Tattoo & Piercing | Tokat Dövme ve Piercing",
  description:
    "Tokat Merkez’de Nuran DELEN ile dövme, piercing ve kalıcı makyaj. 2008’den bu yana kişiye özel uygulama. WhatsApp ve telefon ile randevu.",
  path: "/",
});

export default function HomePage() {
  const posts = getFeaturedBlogPosts(3);
  const homeFaqs = faqItems.filter((item) => item.featuredOnHome).slice(0, 6);

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={personJsonLd()} />
      <JsonLd data={webSiteJsonLd()} />
      <Hero />
      <TrustBadges />
      <ServiceGrid />
      <FeaturedPortfolio />
      <ArtistIntro />
      <ProcessSteps />
      <HygienePreview />
      <ReviewsSection />
      <SevgiIziPreview />
      <section className="section-dark py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Bilgi Rehberi"
            title="Planlamadan önce okuyabileceğiniz yazılar"
            description="Tokat Merkez’de dövme, piercing ve kalıcı makyaj öncesi genel bilgilendirme."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-surface/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="SSS"
            title="Sık sorulan sorular"
            description="Randevu, fiyatlandırma yaklaşımı ve hizmetler hakkında kısa yanıtlar."
          />
          <div className="mt-8">
            <FAQAccordion items={homeFaqs} sourcePage="/" />
          </div>
        </div>
      </section>
      <CTASection sourcePage="/" />
    </>
  );
}
