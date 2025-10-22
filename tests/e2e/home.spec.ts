import { test, expect } from "@playwright/test";

test("It should render key resume sections and CI block", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /skills/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /experience/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /projects/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /tests & ci/i })).toBeVisible();
});
