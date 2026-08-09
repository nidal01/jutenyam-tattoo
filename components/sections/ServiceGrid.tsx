import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Dövme",
    href: "/dovme",
    description:
      "Minimalden cover-up’a, kişiye özel tasarım ve özenli uygulama.",
    featured: true,
  },
  {
    title: "Piercing",
    href: "/piercing",
    description:
      "Kulak, yüz ve vücut piercingleri ile ear styling ve takı değişimi.",
    featured: true,
  },
  {
    title: "Kalıcı Makyaj",
    href: "/kalici-makyaj",
    description:
      "Kaş mikropigmentasyonu, dudak renklendirme, dipliner ve eyeliner.",
    featured: false,
  },
] as const;

export function ServiceGrid() {
  return (
    <section className="section-dark py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Hizmetler"
          title="Dövme ve piercing odaklı, kalıcı makyajla tamamlanan stüdyo"
          description="Ana odak dövme ve piercingdir. Kalıcı makyaj hizmetleri ayrı ve zarif bir alanda sunulur."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={
                service.featured
                  ? "group border border-border bg-surface p-7 transition hover:border-accent lg:col-span-1"
                  : "group border border-accent-soft/30 bg-[linear-gradient(160deg,#f7f3ec,#eee6dc)] p-7 text-text-dark transition hover:border-accent-dark"
              }
            >
              <h3
                className={
                  service.featured
                    ? "font-serif text-3xl text-text group-hover:text-accent"
                    : "font-serif text-3xl text-text-dark"
                }
              >
                {service.title}
              </h3>
              <p
                className={
                  service.featured
                    ? "mt-3 text-muted"
                    : "mt-3 text-[#4a4843]"
                }
              >
                {service.description}
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold tracking-wide text-accent">
                İncele →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
