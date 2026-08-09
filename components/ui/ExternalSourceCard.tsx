type ExternalSourceCardProps = {
  title: string;
  href: string;
  description?: string;
  ctaLabel?: string;
};

export function ExternalSourceCard({
  title,
  href,
  description,
  ctaLabel = "Haberi İncele",
}: ExternalSourceCardProps) {
  return (
    <article className="flex h-full flex-col border border-border bg-surface/40 p-5">
      <h3 className="font-serif text-xl text-text">{title}</h3>
      {description ? (
        <p className="mt-2 flex-1 text-sm text-muted">{description}</p>
      ) : (
        <div className="flex-1" />
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-accent"
      >
        {ctaLabel} →
      </a>
    </article>
  );
}
