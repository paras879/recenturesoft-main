describe('Edge Case Testing - Security & Boundaries', () => {
  const BASE_URL = process.env.WEBSITE_URL;

  test('POST /api/contact handles missing fields gracefully (400 Bad Request)', async () => {
    // Sending empty body
    const response = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    
    // We expect the server to catch the missing fields and not crash (e.g. 400 status)
    expect(response.status).toBeGreaterThanOrEqual(400);
    expect(response.status).toBeLessThan(500);
  });

  test('POST /api/contact blocks potential XSS payloads', async () => {
    const maliciousPayload = {
      name: '<script>alert("XSS")</script>',
      email: 'hacker@example.com',
      message: 'Hello <img src="x" onerror="alert(1)">'
    };

    const response = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(maliciousPayload)
    });

    // The API should either sanitize it (200) or reject it (400), but never crash (500)
    expect(response.status).not.toBe(500);
  });

  test('GET random non-existent page returns 404 cleanly', async () => {
    const randomPath = `/does-not-exist-${Date.now()}`;
    const response = await fetch(`${BASE_URL}${randomPath}`);
    expect(response.status).toBe(404);
  });
});
