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
      <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="container-page relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <div className="animate-fade-up flex flex-wrap items-center gap-2">
            <p className="animate-fade-up font-accent text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {businessConfig.slogan}
            </p>
            <span className="hidden h-px w-8 bg-accent/50 lg:block" aria-hidden />
            <p className="hidden text-xs tracking-wide text-muted lg:inline">
              Tokat Merkez · 2008’den bu yana
            </p>
          </div>
          <h1 className="animate-fade-up-delay mt-4 max-w-xl font-serif text-4xl text-text sm:text-5xl lg:text-6xl">
            Tokat’ta Dövme ve Piercing Sanatı
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base text-muted sm:text-lg">
            {businessConfig.artistName}’in 2008’den bu yana süren deneyimiyle
            kişiye özel dövme, piercing ve kalıcı makyaj uygulamaları.
          </p>
          <ul className="mt-6 hidden gap-4 text-sm text-muted lg:flex">
            <li className="border-l border-accent/60 pl-3">Kişiye özel tasarım</li>
            <li className="border-l border-accent/60 pl-3">Hijyen odaklı çalışma</li>
            <li className="border-l border-accent/60 pl-3">Randevu öncelikli</li>
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <WhatsAppButton
              ctaLocation="hero"
              sourcePage="/"
              className="col-span-2 w-full sm:col-span-1 sm:w-auto"
            />
            <PhoneButton
              ctaLocation="hero"
              sourcePage="/"
              className="w-full sm:w-auto"
            />
            <ButtonLink
              href="/portfoy"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Çalışmaları İncele
            </ButtonLink>
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
