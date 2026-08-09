import Image from "next/image";
import { fetchGooglePlacesSummary } from "@/lib/google/places";
import { GoogleReviews } from "@/components/reviews/GoogleReviews";
import { ManualTestimonials } from "@/components/reviews/ManualTestimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { manualTestimonials } from "@/content/testimonials";
import { businessConfig } from "@/config/business.config";

export async function ReviewsSection() {
  const summary = businessConfig.featureFlags.showGoogleRating
    ? await fetchGooglePlacesSummary()
    : null;
  const hasManual = manualTestimonials.some((item) => item.published);
  const hasGoogle = Boolean(summary && summary.reviews.length > 0);

  return (
    <section className="border-y border-border bg-surface/40 py-16 md:py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Yorumlar"
            title="Müşteri deneyimleri"
            description={
              hasGoogle || hasManual
                ? "Yorum kaynağı açıkça belirtilir. Google puanı yalnızca API verisi geldiğinde gösterilir."
                : "Gerçek Google yorumları bağlandığında burada görünür. Sahte puan veya örnek yorum gösterilmez."
            }
          />
          {!hasGoogle && !hasManual ? (
            <div className="mt-6 space-y-4">
              <p className="text-sm text-muted">
                Deneyiminizi paylaşmak veya randevu almak için doğrudan
                iletişime geçebilirsiniz.
              </p>
              <WhatsAppButton ctaLocation="reviews_empty" sourcePage="/" />
            </div>
          ) : (
            <div className="mt-8 space-y-8">
              {hasGoogle ? <GoogleReviews summary={summary} /> : null}
              {hasManual ? <ManualTestimonials /> : null}
            </div>
          )}
        </div>
        <Image
          src="/images/studio/studio-interior.webp"
          alt="Jutenyam stüdyo iç mekânı"
          width={1200}
          height={675}
          className="h-auto w-full rounded-sm object-cover"
        />
      </div>
    </section>
  );
}
