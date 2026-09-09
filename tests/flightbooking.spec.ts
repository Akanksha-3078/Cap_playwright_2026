import { test, expect } from '@playwright/test';

const websiteUrl = 'https://phptravels.net/';

const bookingData = {
  firstName: 'Alice',
  lastName: 'Johnson',
  email: 'alice.johnson@example.com',
  phone: '+1-555-123-4567'
};

test.describe('Flight Booking', () => {
  test('TC-12 should complete the flight booking journey', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /flights?/i }).first().click();

    await page.getByPlaceholder(/from|origin/i).fill('New York');
    await page.getByPlaceholder(/to|destination/i).fill('London');
    await page.getByLabel(/departure|from date/i).fill('2026-10-15');
    await page.getByLabel(/return|to date/i).fill('2026-10-20');

    await page.getByRole('button', { name: /search|find flights/i }).click();

    await page.getByRole('button', { name: /book|select|continue/i }).first().click();

    await page.getByRole('textbox', { name: /first name/i }).fill(bookingData.firstName);
    await page.getByRole('textbox', { name: /last name/i }).fill(bookingData.lastName);
    await page.getByRole('textbox', { name: /email/i }).fill(bookingData.email);
    await page.getByRole('textbox', { name: /phone/i }).fill(bookingData.phone);

    await page.getByRole('button', { name: /confirm|continue|book now|submit/i }).click();

    await expect(page.getByText(/booking|confirmation|success|reserved/i)).toBeVisible();
  });

  test('TC-13 should block booking when required traveler details are missing', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /flights?/i }).first().click();

    await page.getByPlaceholder(/from|origin/i).fill('New York');
    await page.getByPlaceholder(/to|destination/i).fill('London');
    await page.getByLabel(/departure|from date/i).fill('2026-10-15');
    await page.getByLabel(/return|to date/i).fill('2026-10-20');

    await page.getByRole('button', { name: /search|find flights/i }).click();
    await page.getByRole('button', { name: /book|select|continue/i }).first().click();

    await page.getByRole('button', { name: /confirm|continue|book now|submit/i }).click();

    await expect(page.getByText(/required|please fill|cannot be empty/i)).toBeVisible();
  });
});
