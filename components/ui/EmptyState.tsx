type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div
      className="rounded-sm border border-border bg-surface/70 px-6 py-12 text-center"
      role="status"
    >
      <p className="font-serif text-2xl text-text">{title}</p>
      <p className="mx-auto mt-3 max-w-md text-muted">{description}</p>
    </div>
  );
}
