import { test, expect } from '@playwright/test';

const websiteUrl = 'https://phptravels.net/';
const validLoginData = {
  email: 'john.doe+qa@example.com',
  password: 'Password123!'
};

test.describe('Login', () => {
  test('TC-05 should allow an existing user to log in successfully', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /login|log in/i }).first().click();

    await page.getByRole('textbox', { name: /email/i }).fill(validLoginData.email);
    await page.getByLabel(/password/i).fill(validLoginData.password);

    await page.getByRole('button', { name: /login|log in/i }).click();

    await expect(page.getByRole('link', { name: /logout|log out/i })).toBeVisible();
  });

  test('TC-06 should reject invalid credentials', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /login|log in/i }).first().click();

    await page.getByRole('textbox', { name: /email/i }).fill('no.user@example.com');
    await page.getByLabel(/password/i).fill('WrongPassword123!');

    await page.getByRole('button', { name: /login|log in/i }).click();

    await expect(page.getByText(/invalid credentials|wrong password|login failed/i)).toBeVisible();
  });

  test('TC-07 should reject empty credentials', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /login|log in/i }).first().click();

    await page.getByRole('button', { name: /login|log in/i }).click();

    await expect(page.getByText(/required|please enter|cannot be empty/i)).toBeVisible();
  });
});
