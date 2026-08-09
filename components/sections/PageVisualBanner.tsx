import Image from "next/image";

type PageVisualBannerProps = {
  image: string;
  alt: string;
  caption?: string;
};

export function PageVisualBanner({
  image,
  alt,
  caption,
}: PageVisualBannerProps) {
  return (
    <section className="border-b border-border">
      <div className="container-page py-8 md:py-10">
        <div className="relative aspect-[21/9] min-h-[180px] overflow-hidden border border-border md:min-h-[240px]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1120px) 100vw, 1120px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          {caption ? (
            <p className="absolute bottom-4 left-4 font-serif text-xl text-text md:text-2xl">
              {caption}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
