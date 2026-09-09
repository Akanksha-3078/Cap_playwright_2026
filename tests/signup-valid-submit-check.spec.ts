import { test, expect } from '@playwright/test';

test('submit valid signup form', async ({ page }) => {
  await page.goto('https://phptravels.net/');
  await page.getByRole('button', { name: /i understand & continue/i }).click({ timeout: 10000 }).catch(() => {});
  await page.getByRole('button', { name: /signup/i }).first().click();
  await page.getByText(/customer signup/i).click();

  const email = `john.doe+${Date.now()}@example.com`;
  await page.getByLabel(/first name/i).fill('John');
  await page.getByLabel(/last name/i).fill('Doe');
  await page.getByLabel(/email address/i).fill(email);
  await page.getByLabel(/password/i).fill('Password123!');
  await page.getByLabel(/confirm password/i).fill('Password123!');
  await page.getByLabel(/security check: what is one plus six/i).fill('7');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: /create account/i }).click();
  await page.waitForTimeout(4000);
  console.log('URL=', page.url());
  console.log('Body=', (await page.locator('body').innerText()).slice(0, 5000));
});
