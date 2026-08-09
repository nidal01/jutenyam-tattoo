import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl } from "@/lib/utils/whatsapp";

describe("buildWhatsAppUrl", () => {
  it("builds wa.me url with encoded default message", () => {
    const url = buildWhatsAppUrl();
    expect(url.startsWith("https://wa.me/905424617809?text=")).toBe(true);
    expect(url).toContain(
      encodeURIComponent(
        "Merhaba, hizmetleriniz hakkında bilgi ve randevu almak istiyorum.",
      ),
    );
  });

  it("accepts custom message and phone", () => {
    const url = buildWhatsAppUrl("Test mesaj", "905551112233");
    expect(url).toBe(
      `https://wa.me/905551112233?text=${encodeURIComponent("Test mesaj")}`,
    );
  });
});
