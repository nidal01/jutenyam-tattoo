import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Dövme",
    href: "/dovme",
    description:
      "Minimalden cover-up’a, kişiye özel tasarım ve özenli uygulama.",
    image: "/images/services/dovme.webp",
    imageAlt: "Floral fine line dövme örneği",
  },
  {
    title: "Piercing",
    href: "/piercing",
    description:
      "Kulak, yüz ve vücut piercingleri ile ear styling ve takı değişimi.",
    image: "/images/services/piercing.webp",
    imageAlt: "Ear styling piercing örneği",
  },
  {
    title: "Kalıcı Makyaj",
    href: "/kalici-makyaj",
    description:
      "Kaş mikropigmentasyonu, dudak renklendirme, dipliner ve eyeliner.",
    image: "/images/services/kalici-makyaj.webp",
    imageAlt: "Kaş mikropigmentasyonu örneği",
  },
] as const;

export function ServiceGrid() {
  return (
    <section className="section-dark py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Hizmetler"
          title="Dövme ve piercing odaklı, kalıcı makyajla tamamlanan stüdyo"
          description="Ana odak dövme ve piercingdir. Kalıcı makyaj hizmetleri aynı marka dilinde, görünür biçimde sunulur."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group overflow-hidden border border-border bg-surface transition hover:border-accent"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-3xl text-text group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted">{service.description}</p>
                <span className="mt-5 inline-flex text-sm font-semibold tracking-wide text-accent">
                  İncele →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
