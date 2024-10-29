import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('button', { name: 'count is' }).click();
  await expect(page.locator('#counter')).toContainText('count is 3');
  await expect(page.getByRole('link', { name: 'Vite logo' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Hello Vite!');
});