import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function expectNoCriticalViolations(page: import("@playwright/test").Page) {
  await expect(page).toHaveTitle(/.+/);
  await page.waitForLoadState("networkidle");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  const critical = results.violations.filter(
    (v) => v.impact === "critical" || v.impact === "serious",
  );
  expect(critical, JSON.stringify(critical, null, 2)).toEqual([]);
}

async function dismissCookies(page: import("@playwright/test").Page) {
  const button = page.getByRole("button", { name: "Reddet" });
  if (await button.isVisible().catch(() => false)) {
    await button.click();
  }
}

test.describe("accessibility", () => {
  for (const path of ["/", "/dovme", "/piercing", "/portfoy", "/iletisim"]) {
    test(`${path} has no serious axe violations`, async ({ page }) => {
      await page.goto(path);
      await dismissCookies(page);
      await expectNoCriticalViolations(page);
    });
  }

  test("mobile menu dialog", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await dismissCookies(page);
    await page.getByRole("button", { name: "Menüyü aç" }).click();
    await expect(page.getByRole("dialog", { name: "Mobil menü" })).toBeVisible();
    await expectNoCriticalViolations(page);
  });

  test("cookie panel", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("region", { name: "Çerez bildirimi" })).toBeVisible();
    await expect(page).toHaveTitle(/.+/);
    await expectNoCriticalViolations(page);
  });
});
