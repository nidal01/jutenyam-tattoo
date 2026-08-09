import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Teşekkürler | Jutenyam",
  description: "İletişiminiz için teşekkür ederiz.",
  path: "/tesekkurler",
  noIndex: true,
});

export default function Page() {
  return (
    <>
      <PageHero
        title="Teşekkürler"
        description="Mesajınız veya yönlendirmeniz için teşekkür ederiz. Randevu ve bilgi için WhatsApp veya telefon kullanabilirsiniz."
        crumbs={[{ name: "Ana Sayfa", path: "/" }, { name: "Teşekkürler", path: "/tesekkurler" }]}
      />
      <section className="py-10">
        <div className="container-page">
          <ButtonLink href="/iletisim" variant="secondary">İletişim sayfası</ButtonLink>
        </div>
      </section>
    </>
  );
}
