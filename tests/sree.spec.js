import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto('https://sreeleathersonline.com/',
  { waitUntil: 'domcontentloaded' });
console.log(await page.title());
await page.getByRole('link', { name: 'SL Premium' }).click();
await page.screenshot({path:'screenshot.png'})
await page.mouse.wheel(0, 1000);





})
