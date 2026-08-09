import { describe, expect, it } from "vitest";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getSiteUrl } from "@/config/site.config";
import { shouldShowGoogleRating } from "@/lib/google/places";

describe("metadata and rating fallback", () => {
  it("builds unique metadata with canonical", () => {
    const meta = buildPageMetadata({
      title: "Test",
      description: "Desc",
      path: "/dovme",
    });
    expect(meta.title).toBe("Test");
    expect(meta.alternates?.canonical).toBe(`${getSiteUrl()}/dovme`);
  });

  it("hides google rating when api summary missing", () => {
    expect(shouldShowGoogleRating(null)).toBe(false);
    expect(
      shouldShowGoogleRating({
        rating: null,
        userRatingsTotal: null,
        reviews: [],
        source: "google-places-api",
      }),
    ).toBe(false);
  });
});
