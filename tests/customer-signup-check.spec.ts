import { test, expect } from '@playwright/test';

test('inspect customer signup popup', async ({ page }) => {
  await page.goto('https://phptravels.net/');
  await page.getByRole('button', { name: /i understand & continue/i }).click({ timeout: 10000 }).catch(() => {});
  await page.getByRole('button', { name: /signup/i }).first().click();
  await page.getByText(/customer signup|agent signup/i).first().click();
  //await page.locator(':text("Customer Signup")').click();
  //await page.getByRole('button', { name: /customer signup/i }).click();
  await page.waitForTimeout(2000);
  console.log('URL=', page.url());
  console.log('Buttons=', await page.locator('button').allTextContents());
  console.log('Inputs=', await page.locator('input').count());
  console.log('Labels=', await page.locator('label').allTextContents());
  console.log('Body=', (await page.locator('body').innerText()).slice(0, 6000));
  await expect(page.locator('body')).toContainText(/first name|last name|email|password|i agree|register|customer/i);
});
