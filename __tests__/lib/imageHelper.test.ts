/**
 * Unit Tests: lib/imageHelper.ts
 * Tests the resolveImagePath utility function
 */

import path from 'path';

// We need to mock fs since we can't access the real filesystem in tests
jest.mock('fs', () => ({
  existsSync: jest.fn(),
}));

// Mock process.cwd
const mockCwd = 'C:/mock-project';
jest.spyOn(process, 'cwd').mockReturnValue(mockCwd);

import fs from 'fs';
import { resolveImagePath } from '@/lib/imageHelper';

const mockExistsSync = fs.existsSync as jest.Mock;

describe('resolveImagePath()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns empty string for empty/null input', () => {
    expect(resolveImagePath('')).toBe('');
  });

  it('returns external http URLs unchanged', () => {
    const url = 'http://example.com/image.jpg';
    expect(resolveImagePath(url)).toBe(url);
  });

  it('returns external https URLs unchanged', () => {
    const url = 'https://res.cloudinary.com/demo/image/upload/sample.jpg';
    expect(resolveImagePath(url)).toBe(url);
  });

  it('returns a local path as-is when the file exists', () => {
    mockExistsSync.mockReturnValue(true);
    const result = resolveImagePath('/images/hero.jpg');
    expect(result).toBe('/images/hero.jpg');
  });

  it('adds leading slash if missing', () => {
    mockExistsSync.mockReturnValue(true);
    const result = resolveImagePath('images/hero.jpg');
    expect(result).toBe('/images/hero.jpg');
  });

  it('returns normalized path when file does not exist (no extension fallback needed)', () => {
    mockExistsSync.mockReturnValue(false);
    const result = resolveImagePath('/images/hero.jpg');
    expect(result).toBe('/images/hero.jpg');
  });

  it('resolves .webp path to .jpg alternative when webp does not exist', () => {
    mockExistsSync
      .mockReturnValueOnce(false)  // .webp does not exist
      .mockReturnValueOnce(true);  // .jpg exists
    const result = resolveImagePath('/images/hero.webp');
    expect(result).toBe('/images/hero.jpg');
  });

  it('resolves .webp path to .jpeg when jpg does not exist but jpeg does', () => {
    mockExistsSync
      .mockReturnValueOnce(false)  // .webp file check
      .mockReturnValueOnce(false)  // .jpg does not exist
      .mockReturnValueOnce(true);  // .jpeg exists
    const result = resolveImagePath('/images/hero.webp');
    expect(result).toBe('/images/hero.jpeg');
  });

  it('resolves .webp path to .png when neither jpg nor jpeg exist', () => {
    mockExistsSync
      .mockReturnValueOnce(false)  // .webp file check
      .mockReturnValueOnce(false)  // .jpg
      .mockReturnValueOnce(false)  // .jpeg
      .mockReturnValueOnce(true);  // .png exists
    const result = resolveImagePath('/images/hero.webp');
    expect(result).toBe('/images/hero.png');
  });

  it('returns original .webp path if no alternative found', () => {
    mockExistsSync.mockReturnValue(false);
    const result = resolveImagePath('/images/hero.webp');
    expect(result).toBe('/images/hero.webp');
  });
});
