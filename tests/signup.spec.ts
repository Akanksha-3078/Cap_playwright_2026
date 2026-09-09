import { test, expect } from '@playwright/test';

const websiteUrl = 'https://phptravels.net/';
const validSignupData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe+qa@example.com',
  password: 'Password123!'
};

test.describe('Signup', () => {
  test('TC-01 should allow a new user to create an account', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /sign up|signup|register/i }).first().click();

    await page.getByRole('textbox', { name: /first name/i }).fill(validSignupData.firstName);
    await page.getByRole('textbox', { name: /last name/i }).fill(validSignupData.lastName);
    await page.getByRole('textbox', { name: /email/i }).fill(validSignupData.email);
    await page.getByLabel(/password/i).fill(validSignupData.password);

    await page.getByRole('button', { name: /sign up|create account|register/i }).click();

    await expect(page.getByText(/welcome|account created|success|login/i)).toBeVisible();
  });

  test('TC-02 should validate empty signup fields', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /sign up|signup|register/i }).first().click();

    await page.getByRole('button', { name: /sign up|create account|register/i }).click();

    await expect(page.getByText(/required|cannot be empty|please fill/i)).toBeVisible();
  });

  test('TC-03 should reject invalid email format', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /sign up|signup|register/i }).first().click();

    await page.getByRole('textbox', { name: /first name/i }).fill('John');
    await page.getByRole('textbox', { name: /last name/i }).fill('Doe');
    await page.getByRole('textbox', { name: /email/i }).fill('invalid-email');
    await page.getByLabel(/password/i).fill('Password123!');

    await page.getByRole('button', { name: /sign up|create account|register/i }).click();

    await expect(page.getByText(/email.*valid|invalid email|please enter a valid/i)).toBeVisible();
  });

  test('TC-04 should reject weak password', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /sign up|signup|register/i }).first().click();

    await page.getByRole('textbox', { name: /first name/i }).fill('John');
    await page.getByRole('textbox', { name: /last name/i }).fill('Doe');
    await page.getByRole('textbox', { name: /email/i }).fill('john.doe+weak@example.com');
    await page.getByLabel(/password/i).fill('12345');

    await page.getByRole('button', { name: /sign up|create account|register/i }).click();

    await expect(page.getByText(/weak password|too short|password.*valid/i)).toBeVisible();
  });
});
