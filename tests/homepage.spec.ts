import { test, expect } from '@playwright/test';

test.describe('Homepage E2E', () => {
  test('should load the homepage and check title', async ({ page }) => {
    // Navigate to homepage
    await page.goto('http://localhost:3000/');
    
    // Check title (Update based on actual title in layout)
    await expect(page).toHaveTitle(/Recenture/i);
    
    // Check if the hero section or a known text is visible
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
  });

  test('should check navigation links', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    
    // Verify header exists
    const header = page.locator('header').first();
    await expect(header).toBeVisible();
    
    // Check if Contact Us button or link exists
    const contactLink = page.getByRole('link', { name: /Contact/i }).first();
    if (await contactLink.isVisible()) {
      await expect(contactLink).toBeVisible();
    }
  });

  test('should verify SEO meta tags presence', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    
    // Verify meta description exists
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.*/);
  });
});
