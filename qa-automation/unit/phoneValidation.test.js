import { validatePhone, isPossiblePhoneNumber } from '../../lib/phoneValidation';

describe('Phone Validation Utility Unit Tests', () => {
  
  test('validatePhone returns true for valid international number', () => {
    const result = validatePhone('+919876543210');
    expect(result.valid).toBe(true);
    expect(result.message).toBe('');
  });

  test('validatePhone returns false when missing country code (+)', () => {
    const result = validatePhone('9876543210');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('Phone must include a country code.');
  });

  test('validatePhone returns false for empty input', () => {
    const result = validatePhone('');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('Phone number is required.');
  });

  test('validatePhone returns false for length less than 7', () => {
    const result = validatePhone('+91123');
    expect(result.valid).toBe(false);
    expect(result.message).toBe('Phone number has an invalid length.');
  });

  test('isPossiblePhoneNumber returns true for valid formats', () => {
    expect(isPossiblePhoneNumber('+12025550198')).toBe(true);
  });

  test('isPossiblePhoneNumber returns false for invalid formats', () => {
    expect(isPossiblePhoneNumber('12345')).toBe(false); // No +
    expect(isPossiblePhoneNumber('+123')).toBe(false);  // Too short
  });
});
