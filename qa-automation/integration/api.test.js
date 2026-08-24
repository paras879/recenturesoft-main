describe('Integration Testing - Live API Endpoints', () => {
  const BASE_URL = process.env.WEBSITE_URL;

  test('GET /api/admin/global-blocks returns 200 and a JSON list', async () => {
    const response = await fetch(`${BASE_URL}/api/admin/global-blocks`);
    expect(response.status).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('success', true);
    expect(Array.isArray(data.blocks)).toBe(true);
  });

  test('GET /api/revalidate-pages should require authentication/POST', async () => {
    // According to standard Next.js behavior or our setup, this should fail with 4xx or 5xx if GET
    // or if the secret is missing.
    const response = await fetch(`${BASE_URL}/api/revalidate-pages`, { method: 'POST' });
    // Assuming we don't pass the secret, it should return 401
    expect(response.status).toBe(401);
    
    const data = await response.json();
    expect(data.success).toBe(false);
    expect(data.message).toBe('Unauthorized');
  });

  test('Frontend Homepage loads successfully', async () => {
    const response = await fetch(BASE_URL);
    expect(response.status).toBe(200);
    const text = await response.text();
    expect(text).toContain('<html');
  });
});
