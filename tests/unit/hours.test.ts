import { describe, expect, it } from "vitest";
import {
  formatOpeningHoursList,
  formatOpeningHoursSummary,
  toSchemaOpeningHours,
} from "@/lib/utils/hours";

describe("hours helpers", () => {
  it("formats summary", () => {
    expect(formatOpeningHoursSummary()).toContain("08.00–22.00");
  });

  it("lists turkish day labels", () => {
    const list = formatOpeningHoursList();
    expect(list[0]?.day).toBe("Pazartesi");
    expect(list).toHaveLength(7);
  });

  it("builds schema opening hours", () => {
    const schema = toSchemaOpeningHours();
    expect(schema[0]).toMatch(/^Mo /);
  });
});
