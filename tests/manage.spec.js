import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://managebags.com/');
  await page.getByRole('link', { name: 'Visit product category Cross' }).click();
  await page.getByRole('link', { name: 'Cross Body Sling 06 Cross' }).click();
  await page.locator('div').filter({ hasText: /^Black$/ }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('div').filter({ hasText: /^Brown$/ }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '-' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('a[href*="/cart"]').click();

});