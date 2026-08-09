import { sevgiIziContent } from "@/content/sevgi-izi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SevgiIziPreview() {
  return (
    <section className="section-light py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          tone="light"
          eyebrow="Sosyal sorumluluk"
          title="Sevgi İzi"
          description={sevgiIziContent.shortHome}
        />
        <div className="mt-6">
          <ButtonLink href="/sevgi-izi" variant="light">
            Sevgi İzi Hakkında
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
