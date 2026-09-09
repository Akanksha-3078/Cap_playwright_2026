import { test, expect } from '@playwright/test';

test('inspect register page', async ({ page }) => {
  await page.goto('https://phptravels.net/register');
  await page.waitForLoadState('domcontentloaded');
  console.log('URL=', page.url());
  console.log('title=', await page.title());
  console.log('inputs=', await page.locator('input').count());
  console.log('labels=', await page.locator('label').allTextContents());
  console.log('buttons=', await page.locator('button').allTextContents());
  console.log('body=', (await page.locator('body').innerText()).slice(0, 4000));
  await expect(page.locator('body')).toContainText(/register|sign up|first name|email/i);
});
