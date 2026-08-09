import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/sections/PageHero";

type LegalDocumentProps = {
  title: string;
  path: string;
  intro: string;
  sections: ReadonlyArray<{
    heading: string;
    paragraphs: ReadonlyArray<string>;
  }>;
};

export function LegalDocument({
  title,
  path,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <>
      <PageHero
        title={title}
        description={intro}
        crumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: title, path },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="container-page prose-legal space-y-8">
          <p className="rounded-sm border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent-soft">
            {siteConfig.legalReviewNotice}
          </p>
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-serif text-2xl text-text">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="mt-3 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
