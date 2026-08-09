import { LegalDocument } from "@/components/sections/LegalDocument";
import { legalPages } from "@/content/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";

const page = legalPages.fotograf;

export const metadata = buildPageMetadata({
  title: `${page.title} | Jutenyam`,
  description: page.intro,
  path: page.path,
});

export default function Page() {
  return (
    <LegalDocument
      title={page.title}
      path={page.path}
      intro={page.intro}
      sections={[...page.sections]}
    />
  );
}
