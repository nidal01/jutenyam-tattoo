import Image from "next/image";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PhoneButton } from "@/components/ui/PhoneButton";
import type { FaqItem } from "@/content/faq";

type FaqWithAsideProps = {
  title: string;
  description?: string;
  items: FaqItem[];
  sourcePage: string;
  asideImage?: string;
  asideImageAlt?: string;
  asideTitle?: string;
  asideText?: string;
};

export function FaqWithAside({
  title,
  description,
  items,
  sourcePage,
  asideImage = "/images/studio/studio-interior.webp",
  asideImageAlt = "Jutenyam stüdyo atmosferi",
  asideTitle = "Hâlâ sorusun mu var?",
  asideText = "WhatsApp veya telefon ile doğrudan yazın; randevu ve uygulama hakkında net bilgi alırsınız.",
}: FaqWithAsideProps) {
  return (
    <section className="border-y border-border bg-surface/40 py-14">
      <div className="container-page">
        <SectionHeading title={title} description={description} />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <FAQAccordion items={items} sourcePage={sourcePage} />
          <aside className="space-y-4 lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src={asideImage}
                alt={asideImageAlt}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="border border-border bg-background/50 p-5">
              <h3 className="font-serif text-2xl text-text">{asideTitle}</h3>
              <p className="mt-2 text-sm text-muted">{asideText}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <WhatsAppButton
                  ctaLocation="faq_aside"
                  sourcePage={sourcePage}
                  className="px-3"
                />
                <PhoneButton
                  ctaLocation="faq_aside"
                  sourcePage={sourcePage}
                  className="px-3"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
