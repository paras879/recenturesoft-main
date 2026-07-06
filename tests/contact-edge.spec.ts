import { test, expect } from '@playwright/test';

test.describe('Contact Form Edge Cases', () => {
  test('should not submit with empty fields', async ({ page }) => {
    await page.goto('http://localhost:3000/contact');
    
    // Verify that the submit button is disabled by default 
    // because required fields and reCAPTCHA are not filled
    const submitBtn = page.getByRole('button', { name: /Send Secure Message/i });
    await expect(submitBtn).toBeDisabled();
  });

  test('should handle long text inputs without breaking layout', async ({ page }) => {
    await page.goto('http://localhost:3000/contact');
    
    const messageTextarea = page.getByPlaceholder(/Tell us about your project/i);
    const longString = 'A'.repeat(5000); // 5000 chars
    
    await messageTextarea.fill(longString);
    
    // Ensure the textarea is still visible and layout didn't completely crash
    await expect(messageTextarea).toBeVisible();
    const value = await messageTextarea.inputValue();
    expect(value).toBe(longString);
  });
});
