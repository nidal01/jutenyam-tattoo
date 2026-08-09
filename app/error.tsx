"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container-page py-24 text-center">
      <h1 className="font-serif text-4xl text-text">Bir sorun oluştu</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Teknik ayrıntılar gizlenmiştir. Lütfen yeniden deneyin veya bizimle iletişime geçin.
      </p>
      <button
        type="button"
        className="mt-8 min-h-11 bg-accent px-5 font-semibold text-text-dark"
        onClick={() => reset()}
      >
        Yeniden dene
      </button>
    </section>
  );
}
