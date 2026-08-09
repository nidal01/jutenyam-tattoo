import type { GooglePlacesSummary } from "@/lib/google/places";
import { shouldShowGoogleRating } from "@/lib/google/places";

type ReviewSummaryProps = {
  summary: GooglePlacesSummary | null;
};

export function ReviewSummary({ summary }: ReviewSummaryProps) {
  if (!shouldShowGoogleRating(summary) || !summary) return null;

  return (
    <div className="border border-border bg-surface/50 px-5 py-4">
      <p className="font-serif text-3xl text-text">
        {summary.rating?.toFixed(1)}
        <span className="ml-2 text-base text-muted">/ 5</span>
      </p>
      <p className="mt-1 text-sm text-muted">
        {summary.userRatingsTotal} Google yorumu · Kaynak: Google
      </p>
    </div>
  );
}
