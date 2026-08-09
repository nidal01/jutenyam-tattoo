import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  crumbs: Array<{ name: string; path: string }>;
  tone?: "dark" | "light";
};

export function PageHero({
  title,
  description,
  eyebrow,
  crumbs,
  tone = "dark",
}: PageHeroProps) {
  return (
    <section
      className={
        tone === "light"
          ? "section-light border-b border-border-dark py-10 md:py-14"
          : "border-b border-border py-10 md:py-14"
      }
    >
      <div className="container-page">
        <Breadcrumbs items={crumbs} />
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          tone={tone}
          as="h1"
        />
      </div>
    </section>
  );
}
