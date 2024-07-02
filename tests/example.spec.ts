import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
