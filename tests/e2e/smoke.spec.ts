import { test, expect } from "@playwright/test";

test.describe("Jutenyam smoke", () => {
  test("home opens", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: /Tokat’ta Dövme ve Piercing Sanatı/i }),
    ).toBeVisible();
  });

  test("main nav and service pages", async ({ page }) => {
    await page.goto("/");
    await page.goto("/dovme");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/dövme/i);
    await page.goto("/piercing");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Piercing/i);
    await page.goto("/kalici-makyaj");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Kalıcı/i);
  });

  test("portfolio opens with all filter", async ({ page }) => {
    await page.goto("/portfoy");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/çalışmalar/i);
    await expect(page.getByRole("navigation", { name: "Portföy filtreleri" }).getByRole("link", { name: "Tümü" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  test("whatsapp phone directions urls", async ({ page }) => {
    await page.goto("/");
    const wa = page.locator('a[href*="wa.me/905424617809"]').first();
    await expect(wa).toHaveAttribute(
      "href",
      /text=Merhaba%2C%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum./,
    );
    await expect(page.locator('a[href="tel:+905424617809"]').first()).toBeVisible();
    await expect(
      page.locator('a[href="https://maps.app.goo.gl/E8HAyCcVBXrbHMnV7"]').first(),
    ).toBeVisible();
  });

  test("map loads after click", async ({ page }) => {
    await page.goto("/iletisim");
    await expect(page.getByRole("button", { name: "Haritayı Göster" })).toBeVisible();
    await page.getByRole("button", { name: "Haritayı Göster" }).click();
    await expect(page.locator('iframe[title*="harita"]')).toBeVisible();
  });

  test("cookie reject dismisses banner", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("region", { name: "Çerez bildirimi" })).toBeVisible();
    await page.getByRole("button", { name: "Reddet" }).click();
    await expect(page.getByRole("region", { name: "Çerez bildirimi" })).toHaveCount(0);
  });

  test("cookie accept works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Kabul et" }).click();
    await expect(page.getByRole("region", { name: "Çerez bildirimi" })).toHaveCount(0);
  });

  test("sevgi izi and blog and 404", async ({ page }) => {
    await page.goto("/sevgi-izi");
    await expect(page.getByRole("heading", { level: 1, name: "Sevgi İzi" })).toBeVisible();
    await page.goto("/bilgi-rehberi");
    await page.getByRole("link", { name: /Yazıyı oku/i }).first().click();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.goto("/olmayan-sayfa");
    await expect(page.getByRole("heading", { name: "Sayfa bulunamadı" })).toBeVisible();
  });

  test("mobile menu works", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: "Menüyü aç" }).click();
    await expect(page.getByRole("dialog", { name: "Mobil menü" })).toBeVisible();
    await page.getByLabel("Mobil ana menü").getByRole("link", { name: "Dövme" }).click();
    await expect(page).toHaveURL(/dovme/);
  });
});
