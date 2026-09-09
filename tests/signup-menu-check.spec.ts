import { test, expect } from '@playwright/test';

test('inspect signup menu', async ({ page }) => {
  await page.goto('https://phptravels.net/');
  const signupButton = page.getByRole('button', { name: /signup/i }).first();
  await expect(signupButton).toBeVisible();
  await signupButton.click();
  await page.waitForTimeout(2000);
  console.log('URL after click=', page.url());
  console.log('Buttons after click=', await page.locator('button').allTextContents());
  console.log('Links after click=', await page.locator('a').allTextContents());
  console.log('Body after click=', (await page.locator('body').innerText()).slice(0, 6000));
  console.log('Input count=', await page.locator('input').count());
  console.log('Textboxes=', await page.getByRole('textbox').count());
  await expect(page.locator('body')).toContainText(/signup|register|first name|last name|email|password/i);
});
