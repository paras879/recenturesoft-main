/**
 * Unit Tests: Mongoose Schema Validation
 * Tests schema structure, required fields, and defaults for all models
 */

// Mock mongoose to avoid needing a real DB connection
jest.mock('mongoose', () => {
  const actualMongoose = jest.requireActual('mongoose');
  return {
    ...actualMongoose,
    connect: jest.fn(),
  };
});

describe('Review Model Schema', () => {
  let Review;

  beforeAll(async () => {
    const mod = await import('@/models/Review');
    Review = mod.default;
  });

  it('has the expected fields', () => {
    const paths = Object.keys(Review.schema.paths);
    expect(paths).toContain('name');
    expect(paths).toContain('role');
    expect(paths).toContain('company');
    expect(paths).toContain('rating');
    expect(paths).toContain('avatar');
    expect(paths).toContain('text');
  });

  it('rating field has min 1 and max 5', () => {
    const ratingPath = Review.schema.path('rating');
    expect(ratingPath.options.min).toBe(1);
    expect(ratingPath.options.max).toBe(5);
  });

  it('rating field has default of 5', () => {
    const ratingPath = Review.schema.path('rating');
    expect(ratingPath.options.default).toBe(5);
  });

  it('name field is required', () => {
    const namePath = Review.schema.path('name');
    expect(namePath.isRequired).toBe(true);
  });

  it('role field is required', () => {
    const rolePath = Review.schema.path('role');
    expect(rolePath.isRequired).toBe(true);
  });

  it('text field is required', () => {
    const textPath = Review.schema.path('text');
    expect(textPath.isRequired).toBe(true);
  });

  it('has timestamps enabled', () => {
    expect(Review.schema.options.timestamps).toBe(true);
  });
});

describe('TeamMember Model Schema', () => {
  let TeamMember;

  beforeAll(async () => {
    const mod = await import('@/models/TeamMember');
    TeamMember = mod.default;
  });

  it('has name, role, quote, image fields', () => {
    const paths = Object.keys(TeamMember.schema.paths);
    expect(paths).toContain('name');
    expect(paths).toContain('role');
    expect(paths).toContain('quote');
    expect(paths).toContain('image');
  });

  it('name is required', () => {
    expect(TeamMember.schema.path('name').isRequired).toBe(true);
  });

  it('role is required', () => {
    expect(TeamMember.schema.path('role').isRequired).toBe(true);
  });

  it('quote is required', () => {
    expect(TeamMember.schema.path('quote').isRequired).toBe(true);
  });

  it('image is required', () => {
    expect(TeamMember.schema.path('image').isRequired).toBe(true);
  });
});

describe('Event Model Schema', () => {
  let Event;

  beforeAll(async () => {
    const mod = await import('@/models/Event');
    Event = mod.default;
  });

  it('has title, slug, date, location, heroImage, featured fields', () => {
    const paths = Object.keys(Event.schema.paths);
    expect(paths).toContain('title');
    expect(paths).toContain('slug');
    expect(paths).toContain('date');
    expect(paths).toContain('location');
    expect(paths).toContain('heroImage');
    expect(paths).toContain('featured');
  });

  it('featured field is Boolean type', () => {
    const featuredPath = Event.schema.path('featured');
    expect(featuredPath.instance).toBe('Boolean');
  });
});

describe('EventGallery Model Schema', () => {
  let EventGallery;

  beforeAll(async () => {
    const mod = await import('@/models/EventGallery');
    EventGallery = mod.default;
  });

  it('has eventSlug, year, imageUrl fields', () => {
    const paths = Object.keys(EventGallery.schema.paths);
    expect(paths).toContain('eventSlug');
    expect(paths).toContain('year');
    expect(paths).toContain('imageUrl');
  });
});
