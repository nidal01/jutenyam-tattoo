import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import { businessConfig } from "@/config/business.config";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

function heroExists(): boolean {
  return existsSync(
    path.join(process.cwd(), "public/images/hero/hero-desktop.webp"),
  );
}

export function Hero() {
  const hasHero = heroExists();

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(196,135,92,0.16),transparent_40%)]" />
      <div className="container-page relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="animate-fade-up text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {businessConfig.slogan}
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-xl font-serif text-4xl text-text sm:text-5xl lg:text-6xl">
            Tokat’ta Dövme ve Piercing Sanatı
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base text-muted sm:text-lg">
            {businessConfig.artistName}’in 2008’den bu yana süren deneyimiyle
            kişiye özel dövme, piercing ve kalıcı makyaj uygulamaları.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton ctaLocation="hero" sourcePage="/" />
            <ButtonLink href="/portfoy" variant="secondary">
              Çalışmaları İncele
            </ButtonLink>
            <PhoneButton ctaLocation="hero" sourcePage="/" />
          </div>
        </div>

        <div className="animate-fade-up-delay relative">
          {hasHero ? (
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/images/hero/hero-mobile.webp"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="/images/hero/hero-tablet.webp"
              />
              <Image
                src="/images/hero/hero-desktop.webp"
                alt="Nuran DELEN, Jutenyam stüdyosunda çalışırken"
                width={960}
                height={1200}
                priority
                className="h-auto w-full rounded-sm object-cover shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              />
            </picture>
          ) : (
            <ImagePlaceholder
              aspect="hero"
              label="Nuran DELEN stüdyo görseli yakında eklenecek"
            />
          )}
        </div>
      </div>
    </section>
  );
}
