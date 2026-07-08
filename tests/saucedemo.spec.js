import {test,expect} from '@playwright/test'
import { BaseUrl, USERNAME, PASSWORD } from './utils/envconfig.js';

test('login to saucedemo application', async({page})=> {

   test.setTimeout(100000);

    await page.goto(BaseUrl);

   await page.locator('input[name="username"]').fill(USERNAME);
   await page.locator('input[name="password"]').fill(PASSWORD);
   await page.locator('button[type="submit"]').click();
   // await expect(page).toHaveURL(/.*inventory.html/);
})
 
