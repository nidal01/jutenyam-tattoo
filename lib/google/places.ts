export type GoogleReview = {
  authorName: string;
  rating: number;
  text: string;
  relativeTime?: string;
  time?: number;
};

export type GooglePlacesSummary = {
  rating: number | null;
  userRatingsTotal: number | null;
  reviews: GoogleReview[];
  source: "google-places-api";
};

type PlacesApiResponse = {
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: Array<{
      author_name?: string;
      rating?: number;
      text?: string;
      relative_time_description?: string;
      time?: number;
    }>;
  };
  status?: string;
  error_message?: string;
};

export async function fetchGooglePlacesSummary(): Promise<GooglePlacesSummary | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json",
    );
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("language", "tr");
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as PlacesApiResponse;
    if (data.status !== "OK" || !data.result) {
      return null;
    }

    const rating =
      typeof data.result.rating === "number" ? data.result.rating : null;
    const userRatingsTotal =
      typeof data.result.user_ratings_total === "number"
        ? data.result.user_ratings_total
        : null;

    const reviews: GoogleReview[] = (data.result.reviews ?? [])
      .filter((review) => review.text && review.author_name)
      .map((review) => ({
        authorName: review.author_name ?? "Google kullanıcısı",
        rating: review.rating ?? 0,
        text: review.text ?? "",
        relativeTime: review.relative_time_description,
        time: review.time,
      }));

    return {
      rating,
      userRatingsTotal,
      reviews,
      source: "google-places-api",
    };
  } catch {
    return null;
  }
}

export function shouldShowGoogleRating(
  summary: GooglePlacesSummary | null,
): boolean {
  if (!summary) return false;
  return (
    summary.rating !== null &&
    summary.userRatingsTotal !== null &&
    summary.userRatingsTotal > 0
  );
}
