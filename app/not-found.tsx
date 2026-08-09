import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="text-sm tracking-[0.2em] text-accent uppercase">404</p>
      <h1 className="mt-4 font-serif text-4xl text-text">Sayfa bulunamadı</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Ana Sayfa</ButtonLink>
        <ButtonLink href="/iletisim" variant="secondary">İletişim</ButtonLink>
      </div>
    </section>
  );
}
