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
    <section className="py-16 md:py-20">
      <div className="container-page border border-border bg-[linear-gradient(135deg,rgba(196,135,92,0.16),rgba(24,25,29,0.9))] px-6 py-12 md:px-10">
        <h2 className="max-w-2xl font-serif text-3xl text-text md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppButton
            ctaLocation="cta_section"
            sourcePage={sourcePage}
            service={service}
          />
          <PhoneButton ctaLocation="cta_section" sourcePage={sourcePage} />
          <DirectionsButton
            ctaLocation="cta_section"
            sourcePage={sourcePage}
          />
        </div>
      </div>
    </section>
  );
}
