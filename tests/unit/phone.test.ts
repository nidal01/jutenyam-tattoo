import { describe, expect, it } from "vitest";
import { buildPhoneUrl } from "@/lib/utils/phone";

describe("buildPhoneUrl", () => {
  it("returns tel link from business config", () => {
    expect(buildPhoneUrl()).toBe("tel:+905424617809");
  });
});
