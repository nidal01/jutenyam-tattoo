import { describe, expect, it } from "vitest";
import { isFeatureEnabled } from "@/lib/utils/feature-flags";

describe("feature flags", () => {
  it("hides certificates by default", () => {
    expect(isFeatureEnabled("showCertificates")).toBe(false);
  });

  it("shows sevgi izi by default", () => {
    expect(isFeatureEnabled("showSevgiIzi")).toBe(true);
  });
});
