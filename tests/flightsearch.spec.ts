import { test, expect } from '@playwright/test';

const websiteUrl = 'https://phptravels.net/';

const validFlightSearchData = {
  from: 'New York',
  to: 'London',
  departureDate: '2026-10-15',
  returnDate: '2026-10-20',
  adults: 1
};

test.describe('Flights', () => {
  test('TC-08 should search for flights with valid data', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /flights?/i }).first().click();

    await page.getByPlaceholder(/from|origin/i).fill(validFlightSearchData.from);
    await page.getByPlaceholder(/to|destination/i).fill(validFlightSearchData.to);
    await page.getByLabel(/departure|from date/i).fill(validFlightSearchData.departureDate);
    await page.getByLabel(/return|to date/i).fill(validFlightSearchData.returnDate);

    await page.getByRole('button', { name: /search|find flights/i }).click();

    await expect(page.getByText(/flight|results|departure|price/i)).toBeVisible();
  });

  test('TC-09 should validate missing flight search data', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /flights?/i }).first().click();

    await page.getByRole('button', { name: /search|find flights/i }).click();

    await expect(page.getByText(/required|please fill|select/i)).toBeVisible();
  });

  test('TC-10 should reject invalid flight date selection', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /flights?/i }).first().click();

    await page.getByPlaceholder(/from|origin/i).fill('New York');
    await page.getByPlaceholder(/to|destination/i).fill('London');
    await page.getByLabel(/departure|from date/i).fill('2026-10-20');
    await page.getByLabel(/return|to date/i).fill('2026-10-15');

    await page.getByRole('button', { name: /search|find flights/i }).click();

    await expect(page.getByText(/date.*invalid|invalid date|select valid dates/i)).toBeVisible();
  });

  test('TC-11 should show a no-results state for unavailable flights', async ({ page }) => {
    await page.goto(websiteUrl);
    await page.getByRole('link', { name: /flights?/i }).first().click();

    await page.getByPlaceholder(/from|origin/i).fill('Atlantis');
    await page.getByPlaceholder(/to|destination/i).fill('Moon');
    await page.getByLabel(/departure|from date/i).fill('2026-10-15');
    await page.getByLabel(/return|to date/i).fill('2026-10-20');

    await page.getByRole('button', { name: /search|find flights/i }).click();

    await expect(page.getByText(/no flights|no results|not available|unavailable/i)).toBeVisible();
  });
});
