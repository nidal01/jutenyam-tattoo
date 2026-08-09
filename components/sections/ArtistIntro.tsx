import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { businessConfig } from "@/config/business.config";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ArtistIntro() {
  const hasArtist = existsSync(
    path.join(process.cwd(), "public/images/artist/nuran-delen.webp"),
  );

  return (
    <section className="section-dark py-16 md:py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        {hasArtist ? (
          <Image
            src="/images/artist/nuran-delen.webp"
            alt="Nuran DELEN, Jutenyam stüdyosunda çalışırken"
            width={720}
            height={900}
            className="h-auto w-full rounded-sm object-cover"
          />
        ) : (
          <ImagePlaceholder
            aspect="portrait"
            label="Sanatçı görseli yakında eklenecek"
          />
        )}
        <div>
          <SectionHeading
            eyebrow={businessConfig.artistTitle}
            title={businessConfig.artistName}
            description={businessConfig.artistBio}
          />
          <div className="mt-6">
            <ButtonLink href="/hakkimizda" variant="secondary">
              Hakkımızda
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
