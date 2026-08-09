import { manualTestimonials } from "@/content/testimonials";

export function ManualTestimonials() {
  const items = manualTestimonials.filter((item) => item.published);
  if (items.length === 0) return null;

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">Kaynak: Manuel olarak eklenen gerçek yorumlar</p>
      <ul className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <li key={item.id} className="border border-border bg-background/40 p-5">
            <p className="text-sm font-semibold text-text">{item.authorDisplay}</p>
            <p className="mt-3 text-sm text-muted">&ldquo;{item.quote}&rdquo;</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
