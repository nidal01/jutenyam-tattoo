import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { businessConfig } from "@/config/business.config";
import { certificates } from "@/content/certificates";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { personJsonLd } from "@/lib/seo/json-ld";
import { isFeatureEnabled } from "@/lib/utils/feature-flags";

export const metadata = buildPageMetadata({
  title: "Nuran DELEN Hakkında | Jutenyam Tattoo & Piercing",
  description: "Nuran DELEN, 2008’den bu yana Tokat Merkez’de dövme, piercing ve kalıcı makyaj alanında hizmet vermektedir.",
  path: "/hakkimizda",
});

export default function HakkimizdaPage() {
  const hasArtist = existsSync(path.join(process.cwd(), "public/images/artist/nuran-delen.webp"));
  const showCertificates = isFeatureEnabled("showCertificates") && certificates.some((c) => c.published);

  return (
    <>
      <JsonLd data={personJsonLd()} />
      <PageHero
        eyebrow="Hakkımızda"
        title={businessConfig.artistName}
        description={businessConfig.artistBio}
        crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Hakkımızda", path: "/hakkimizda" }]}
      />
      <section className="py-14">
        <div className="container-page grid items-start gap-10 lg:grid-cols-2">
          {hasArtist ? (
            <Image src="/images/artist/nuran-delen.webp" alt="Nuran DELEN, Jutenyam stüdyosunda çalışırken" width={720} height={900} className="w-full rounded-sm object-cover" />
          ) : (
            <ImagePlaceholder aspect="portrait" label="Sanatçı görseli yakında eklenecek" />
          )}
          <div className="space-y-4 text-muted">
            <p>{businessConfig.artistTitle}</p>
            <p>2008’den bu yana Tokat Merkez’de dövme ve piercing odaklı, kalıcı makyajla desteklenen bir stüdyo deneyimi sunuyoruz.</p>
            <p>{businessConfig.slogan}</p>
            <p className="text-sm">{businessConfig.address.full}</p>
            <p className="text-sm">{businessConfig.openingHoursDisplay}</p>
            <p className="text-sm">{businessConfig.appointmentPolicy}</p>
          </div>
        </div>
        <div className="container-page mt-12 grid gap-8 lg:grid-cols-2">
          <Image
            src="/images/studio/studio-interior.webp"
            alt="Jutenyam Tattoo & Piercing stüdyo atmosferi"
            width={1200}
            height={675}
            className="h-auto w-full rounded-sm object-cover"
          />
          <div className="flex flex-col justify-center space-y-4 text-muted">
            <h2 className="font-serif text-3xl text-text">Stüdyo</h2>
            <p>
              Tokat Merkez’de modern ve sakin bir çalışma alanı. Hijyen odaklı
              hazırlık, kişiye özel tasarım ve net iletişim temel yaklaşımımızdır.
            </p>
            <p className="text-sm">
              Randevu için WhatsApp veya telefon yeterlidir. Kapora alınmamaktadır.
            </p>
          </div>
        </div>
        {showCertificates ? (
          <div className="container-page mt-12">
            <h2 className="font-serif text-3xl text-text">Sertifikalar</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {certificates.filter((c) => c.published).map((cert) => (
                <li key={cert.id} className="border border-border p-5">
                  <p className="font-serif text-xl text-text">{cert.title}</p>
                  <p className="mt-2 text-sm text-muted">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
      <CTASection sourcePage="/hakkimizda" />
    </>
  );
}
