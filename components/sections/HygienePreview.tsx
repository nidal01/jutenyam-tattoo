import Link from "next/link";
import { hygienePractices } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HygienePreview() {
  return (
    <section className="section-dark py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Hijyen"
          title="Hijyen odaklı çalışma yaklaşımı"
          description="Doğrulanmış uygulamalarımızı kısa ve net biçimde paylaşıyoruz. Abartılı sağlık vaatleri kullanmıyoruz."
        />
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {hygienePractices.map((item) => (
            <li
              key={item}
              className="border border-border bg-surface/50 px-4 py-4 text-sm text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/hijyen-ve-uygulama-yaklasimi"
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-accent"
        >
          Hijyen ve uygulama yaklaşımı →
        </Link>
      </div>
    </section>
  );
}
