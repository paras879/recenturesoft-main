const { test, expect } = require('@playwright/test');

test.describe('End-to-End User Journey', () => {
  
  test('Homepage loads and navigation works', async ({ page, baseURL }) => {
    // 1. Load Homepage
    await page.goto('/');
    
    // Check if main heading or title exists
    await expect(page).toHaveTitle(/RecentureSoft|Home/i);

    // 2. Click on a navigation link (e.g., Contact Us)
    // Adjust selector based on actual navigation bar implementation
    const contactLink = page.locator('nav a, header a').filter({ hasText: /Contact/i }).first();
    
    if (await contactLink.isVisible()) {
      await contactLink.click();
      
      // 3. Verify URL changed to contact page
      await expect(page).toHaveURL(/.*\/contact/);
      
      // 4. Verify a contact form exists
      const form = page.locator('form');
      await expect(form.first()).toBeVisible();
    }
  });

  test('Form submission failure handling (Invalid inputs)', async ({ page }) => {
    await page.goto('/contact');
    
    const submitButton = page.locator('button[type="submit"], input[type="submit"]').first();
    
    // If the form exists, try submitting it empty
    if (await submitButton.isVisible()) {
      await submitButton.click();
      
      // Typically, HTML5 validation or JS validation will show a required message
      // We expect the URL to NOT change (still on /contact) or show an error
      await expect(page).toHaveURL(/.*\/contact/);
    }
  });
});
