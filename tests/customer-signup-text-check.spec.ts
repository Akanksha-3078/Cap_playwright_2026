import { test, expect } from '@playwright/test';

test('inspect customer signup text', async ({ page }) => {
  await page.goto('https://phptravels.net/');
  await page.getByRole('button', { name: /i understand & continue/i }).click({ timeout: 10000 }).catch(() => {});
  await page.getByRole('button', { name: /signup/i }).first().click();
  const signupText = page.getByText(/customer signup|agent signup/i).first();
  console.log('signupText count=', await signupText.count());
  console.log('signupText text=', await signupText.innerText());
  await signupText.click();
  await page.waitForTimeout(2000);
  console.log('URL=', page.url());
  console.log('Body=', (await page.locator('body').innerText()).slice(0, 6000));
  console.log('Input count=', await page.locator('input').count());
  console.log('Labels=', await page.locator('label').allTextContents());
});
