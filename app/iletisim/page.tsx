import { PageHero } from "@/components/sections/PageHero";
import { ClickToLoadMap } from "@/components/sections/ClickToLoadMap";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { businessConfig } from "@/config/business.config";
import { formatOpeningHoursList } from "@/lib/utils/hours";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessJsonLd } from "@/lib/seo/json-ld";

export const metadata = buildPageMetadata({
  title: "Jutenyam İletişim ve Yol Tarifi | Tokat",
  description: "Jutenyam Tattoo & Piercing iletişim bilgileri, çalışma saatleri ve yol tarifi. Tokat Merkez.",
  path: "/iletisim",
});

export default function Page() {
  const hours = formatOpeningHoursList();
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <PageHero
        title="İletişim"
        description="Randevu formu yoktur. WhatsApp veya telefon ile doğrudan ulaşabilirsiniz."
        crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "İletişim", path: "/iletisim" }]}
      />
      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div>
              <h2 className="font-serif text-2xl text-text">Adres</h2>
              <p className="mt-2 text-muted">{businessConfig.address.full}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-text">Telefon ve WhatsApp</h2>
              <p className="mt-2 text-muted">{businessConfig.phoneDisplay}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <WhatsAppButton ctaLocation="contact_page" sourcePage="/iletisim" />
                <PhoneButton ctaLocation="contact_page" sourcePage="/iletisim" />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-text">E-posta</h2>
              <a href={`mailto:${businessConfig.email}`} className="mt-2 inline-flex min-h-11 items-center text-accent">
                {businessConfig.email}
              </a>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-text">Çalışma saatleri</h2>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {hours.map((item) => (
                  <li key={item.day}>{item.day}: {item.hours}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted">{businessConfig.appointmentPolicy}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-text">Sosyal medya</h2>
              <SocialLinks className="mt-2" sourcePage="/iletisim" />
            </div>
          </div>
          <ClickToLoadMap sourcePage="/iletisim" />
        </div>
      </section>
    </>
  );
}
