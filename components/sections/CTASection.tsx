import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { DirectionsButton } from "@/components/ui/DirectionsButton";

type CTASectionProps = {
  title?: string;
  description?: string;
  sourcePage: string;
  service?: string;
};

export function CTASection({
  title = "Senin tarzına uygun uygulama için iletişime geç.",
  description = "Randevu ve bilgi için WhatsApp veya telefon yeterlidir. Kapora alınmamaktadır.",
  sourcePage,
  service,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,135,92,0.18),transparent_55%),radial-gradient(ellipse_at_50%_100%,rgba(196,135,92,0.08),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="container-page relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            İletişim
          </p>

          <div
            aria-hidden
            className="mt-5 flex w-full max-w-xs items-center gap-3"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/60" />
            <span className="size-1.5 rotate-45 bg-accent" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/60" />
          </div>

          <h2 className="mt-6 font-serif text-[1.75rem] leading-tight text-text sm:text-3xl md:text-4xl md:leading-[1.15] lg:text-[2.75rem]">
            {title}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>

          <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <WhatsAppButton
              ctaLocation="cta_section"
              sourcePage={sourcePage}
              service={service}
              className="w-full px-6 sm:w-auto"
            />
            <PhoneButton
              ctaLocation="cta_section"
              sourcePage={sourcePage}
              className="w-full px-6 sm:w-auto"
            />
            <DirectionsButton
              ctaLocation="cta_section"
              sourcePage={sourcePage}
              className="w-full px-6 sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
