import { test, expect } from '@playwright/test';

test.describe('Contact Flow E2E', () => {
  test('should navigate to contact page and render form', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    
    // Find contact link in the navigation menu
    const contactLink = page.getByRole('link', { name: /Contact/i }).first();
    await contactLink.click();
    
    // Wait for URL to change to /contact
    await page.waitForURL('**/contact');
    
    // Check if the Contact page hero is visible
    await expect(page.getByRole('heading', { name: /Start a Conversation/i }).first()).toBeVisible();
    
    // Verify all input fields in the contact form are visible
    await expect(page.getByPlaceholder('First Name')).toBeVisible();
    await expect(page.getByPlaceholder('Last Name')).toBeVisible();
    await expect(page.getByPlaceholder('Email Address')).toBeVisible();
    await expect(page.getByPlaceholder('Phone Number')).toBeVisible();
    
    // Verify submit button
    const submitBtn = page.getByRole('button', { name: /Send Secure Message/i });
    await expect(submitBtn).toBeVisible();
  });
});
