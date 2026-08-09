import { fetchGooglePlacesSummary } from "@/lib/google/places";
import { GoogleReviews } from "@/components/reviews/GoogleReviews";
import { ManualTestimonials } from "@/components/reviews/ManualTestimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { manualTestimonials } from "@/content/testimonials";
import { businessConfig } from "@/config/business.config";

export async function ReviewsSection() {
  const summary = businessConfig.featureFlags.showGoogleRating
    ? await fetchGooglePlacesSummary()
    : null;
  const hasManual = manualTestimonials.some((item) => item.published);
  const hasGoogle = Boolean(summary && summary.reviews.length > 0);

  if (!hasGoogle && !hasManual) {
    return (
      <section className="border-y border-border bg-surface/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Yorumlar"
            title="Müşteri deneyimleri"
            description="Gerçek Google yorumları bağlandığında veya manuel gerçek yorumlar eklendiğinde burada görünür. Sahte puan veya yorum gösterilmez."
          />
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-border bg-surface/40 py-16 md:py-20">
      <div className="container-page space-y-8">
        <SectionHeading
          eyebrow="Yorumlar"
          title="Müşteri deneyimleri"
          description="Yorum kaynağı açıkça belirtilir. Google puanı yalnızca API verisi geldiğinde gösterilir."
        />
        {hasGoogle ? <GoogleReviews summary={summary} /> : null}
        {hasManual ? <ManualTestimonials /> : null}
      </div>
    </section>
  );
}
