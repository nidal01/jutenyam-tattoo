import { trustBadges } from "@/content/services";

export function TrustBadges() {
  return (
    <section className="border-b border-border bg-surface/50 py-10">
      <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {trustBadges.map((badge) => (
          <div
            key={badge.title}
            className="border border-border bg-background/40 px-4 py-5"
          >
            <p className="font-serif text-xl text-text">{badge.title}</p>
            <p className="mt-2 text-sm text-muted">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
