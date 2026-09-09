const { chromium } = require('@playwright/test');
(async() => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://phptravels.net/', { waitUntil: 'domcontentloaded' });
  console.log('URL:', page.url());
  console.log('Buttons:', await page.locator('button').allTextContents());
  console.log('Links:', await page.locator('a').allTextContents());
  const signupButton = page.getByRole('button', { name: /signup/i }).first();
  console.log('signupButton exists?', await signupButton.count());
  if (await signupButton.count()) {
    await signupButton.click();
    await page.waitForTimeout(2000);
    console.log('After click URL:', page.url());
    console.log('Body text snippet:', (await page.locator('body').innerText()).slice(0, 4000));
    console.log('Input labels:', await page.getByRole('textbox').allTextContents());
  }
  await browser.close();
})();
