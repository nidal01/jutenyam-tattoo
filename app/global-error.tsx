"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body style={{ background: "#101114", color: "#f7f3ec", fontFamily: "system-ui", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h1>Beklenmeyen bir hata oluştu</h1>
        <p>Lütfen sayfayı yenileyin.</p>
        <button type="button" onClick={() => reset()} style={{ marginTop: "1.5rem", minHeight: 44, padding: "0 1.25rem" }}>
          Yeniden dene
        </button>
      </body>
    </html>
  );
}
