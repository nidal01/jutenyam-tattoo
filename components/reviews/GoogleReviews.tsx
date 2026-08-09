import type { GooglePlacesSummary } from "@/lib/google/places";
import { ReviewSummary } from "@/components/reviews/ReviewSummary";

type GoogleReviewsProps = {
  summary: GooglePlacesSummary | null;
};

export function GoogleReviews({ summary }: GoogleReviewsProps) {
  if (!summary || summary.reviews.length === 0) return null;

  return (
    <div className="space-y-4">
      <ReviewSummary summary={summary} />
      <ul className="grid gap-4 md:grid-cols-2">
        {summary.reviews.slice(0, 4).map((review, index) => (
          <li
            key={`${review.authorName}-${index}`}
            className="border border-border bg-background/40 p-5"
          >
            <p className="text-sm font-semibold text-text">{review.authorName}</p>
            <p className="mt-1 text-xs text-muted">
              Google · {review.rating}/5
              {review.relativeTime ? ` · ${review.relativeTime}` : ""}
            </p>
            <p className="mt-3 text-sm text-muted">{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
