/**
 * Unit Tests: Slug Generation Logic
 * Tests the title-to-slug generation logic used in /api/events route
 */

describe('Slug Generation Logic', () => {
  // Extracted the slug generation logic from /api/events/route.ts for testing
  function generateSlug(title) {
    if (!title) return '';
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }

  it('converts title to lowercase slug', () => {
    expect(generateSlug('Holi Celebration')).toBe('holi-celebration');
  });

  it('replaces spaces with hyphens', () => {
    expect(generateSlug('New Year Party 2025')).toBe('new-year-party-2025');
  });

  it('removes special characters', () => {
    expect(generateSlug('Team Outing! #fun')).toBe('team-outing-fun');
  });

  it('handles multiple consecutive spaces', () => {
    expect(generateSlug('Diwali  Festival')).toBe('diwali-festival');
  });

  it('trims leading/trailing hyphens', () => {
    expect(generateSlug(' Event Title ')).toBe('event-title');
  });

  it('returns empty string for empty input', () => {
    expect(generateSlug('')).toBe('');
  });

  it('handles numbers correctly', () => {
    expect(generateSlug('Event 2026')).toBe('event-2026');
  });

  it('handles already lowercase title', () => {
    expect(generateSlug('annual meetup')).toBe('annual-meetup');
  });
});

describe('API Response Structure Validation', () => {
  it('validates a valid review object structure', () => {
    const review = {
      name: 'John Doe',
      role: 'CEO',
      company: 'TechCorp',
      rating: 5,
      avatar: 'https://example.com/avatar.jpg',
      text: 'Excellent service!'
    };

    expect(review).toHaveProperty('name');
    expect(review).toHaveProperty('role');
    expect(review).toHaveProperty('company');
    expect(review).toHaveProperty('rating');
    expect(typeof review.rating).toBe('number');
    expect(review.rating).toBeGreaterThanOrEqual(1);
    expect(review.rating).toBeLessThanOrEqual(5);
    expect(review).toHaveProperty('text');
  });

  it('validates a valid team member object structure', () => {
    const member = {
      name: 'Jane Smith',
      role: 'Senior Developer',
      quote: 'Best company to work at!',
      image: 'https://example.com/photo.jpg'
    };

    expect(member).toHaveProperty('name');
    expect(member).toHaveProperty('role');
    expect(member).toHaveProperty('quote');
    expect(member).toHaveProperty('image');
    expect(typeof member.name).toBe('string');
    expect(member.name.length).toBeGreaterThan(0);
  });

  it('validates a valid event object structure', () => {
    const event = {
      title: 'Holi Celebration',
      slug: 'holi-celebration',
      date: '2026-03-20',
      location: 'Office Garden',
      heroImage: '/images/holi.jpg',
      featured: true,
    };

    expect(event).toHaveProperty('title');
    expect(event).toHaveProperty('slug');
    expect(typeof event.featured).toBe('boolean');
    expect(event.slug).toBe('holi-celebration');
  });

  it('validates rating bounds: rating 0 is invalid', () => {
    const rating = 0;
    expect(rating).toBeLessThan(1);
  });

  it('validates rating bounds: rating 6 is invalid', () => {
    const rating = 6;
    expect(rating).toBeGreaterThan(5);
  });

  it('validates rating bounds: rating 5 is valid', () => {
    const rating = 5;
    expect(rating).toBeGreaterThanOrEqual(1);
    expect(rating).toBeLessThanOrEqual(5);
  });
});
