import { test, expect } from "@playwright/test";

[{ name: "Test name (Page title)", url: "https://playwright.dev" }].forEach(({ name, url }) => {
  test(name, async ({ page }) => {
    await page.goto(url);
    await page.waitForTimeout(5000);
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});
