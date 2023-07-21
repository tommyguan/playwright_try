import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('test');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(page.getByRole('link', { name: 'Images' })).toHaveCount(2);

});