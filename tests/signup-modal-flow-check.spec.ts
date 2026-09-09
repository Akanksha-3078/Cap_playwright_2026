import { test, expect } from '@playwright/test';

test('inspect signup modal flow', async ({ page }) => {
  await page.goto('https://phptravels.net/');
  const modalBtn = page.getByRole('button', { name: /i understand & continue/i });
  if (await modalBtn.count()) {
    await modalBtn.click();
  }
  const signupButton = page.getByRole('button', { name: /signup/i }).first();
  await expect(signupButton).toBeVisible();
  await signupButton.click();
  await page.waitForTimeout(2000);
  console.log('URL after signup click=', page.url());
  console.log('Buttons after signup click=', await page.locator('button').allTextContents());
  console.log('Text fields role=', await page.getByRole('textbox').count());
  console.log('Label texts=', await page.locator('label').allTextContents());
  console.log('Body text=', (await page.locator('body').innerText()).slice(0, 5000));
  await expect(page.locator('body')).toContainText(/first name|last name|email|password|sign up|register/i);
});
