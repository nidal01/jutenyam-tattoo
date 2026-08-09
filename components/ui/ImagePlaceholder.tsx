import { cn } from "@/lib/utils/cn";

type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  aspect?: "hero" | "square" | "portrait" | "wide";
};

const aspectClass = {
  hero: "aspect-[4/5] md:aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function ImagePlaceholder({
  label = "Görsel yakında eklenecek",
  className,
  aspect = "square",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "placeholder-shimmer relative flex items-end overflow-hidden rounded-sm border border-border",
        aspectClass[aspect],
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,135,92,0.2),transparent_45%)]" />
      <div className="relative z-[1] w-full bg-gradient-to-t from-background/90 to-transparent p-4">
        <p className="font-serif text-lg tracking-wide text-accent-soft">
          JUTENYAM
        </p>
        <p className="text-sm text-muted">{label}</p>
      </div>
    </div>
  );
}
