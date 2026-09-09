import { test, expect } from '@playwright/test';

const websiteUrl = 'https://phptravels.net/';
const validLoginData = {
  email: 'john.doe+qa@example.com',
  password: 'Password123!'
};

test.describe('Logout', () => {
  test('TC-14 should log out an authenticated user successfully', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /login|log in/i }).first().click();

    await page.getByRole('textbox', { name: /email/i }).fill(validLoginData.email);
    await page.getByLabel(/password/i).fill(validLoginData.password);
    await page.getByRole('button', { name: /login|log in/i }).click();

    await page.getByRole('link', { name: /logout|log out/i }).click();

    await expect(page.getByRole('link', { name: /login|log in/i })).toBeVisible();
  });

  test('TC-15 should prevent access to protected pages after logout', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /login|log in/i }).first().click();

    await page.getByRole('textbox', { name: /email/i }).fill(validLoginData.email);
    await page.getByLabel(/password/i).fill(validLoginData.password);
    await page.getByRole('button', { name: /login|log in/i }).click();

    await page.getByRole('link', { name: /logout|log out/i }).click();

    await page.goto(websiteUrl);
    await page.goto(`${websiteUrl}account`); // or the protected page route for your app

    await expect(page.getByText(/login|sign in|authentication required/i)).toBeVisible();
  });
});
