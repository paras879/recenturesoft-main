/**
 * Unit Tests: lib/chartUtils.js
 * Tests the generateLast7DaysChartData utility function
 */

import { generateLast7DaysChartData } from '@/lib/chartUtils';

describe('generateLast7DaysChartData()', () => {
  it('returns an array of 7 items', () => {
    const result = generateLast7DaysChartData([], 'count');
    expect(result).toHaveLength(7);
  });

  it('returns 7 items with default countKey', () => {
    const result = generateLast7DaysChartData([]);
    expect(result).toHaveLength(7);
  });

  it('last item has date label "Today"', () => {
    const result = generateLast7DaysChartData([], 'count');
    const last = result[result.length - 1];
    expect(last.date).toBe('Today');
  });

  it('second to last item has date label "Yesterday"', () => {
    const result = generateLast7DaysChartData([], 'count');
    const secondLast = result[result.length - 2];
    expect(secondLast.date).toBe('Yesterday');
  });

  it('returns all zeros when no records provided', () => {
    const result = generateLast7DaysChartData([], 'count');
    result.forEach(item => {
      expect(item.count).toBe(0);
    });
  });

  it('counts a record created today correctly', () => {
    const todayRecord = { createdAt: new Date().toISOString() };
    const result = generateLast7DaysChartData([todayRecord], 'count');
    const todayData = result.find(r => r.date === 'Today');
    expect(todayData?.count).toBe(1);
  });

  it('counts multiple records created today', () => {
    const records = [
      { createdAt: new Date().toISOString() },
      { createdAt: new Date().toISOString() },
      { createdAt: new Date().toISOString() },
    ];
    const result = generateLast7DaysChartData(records, 'count');
    const todayData = result.find(r => r.date === 'Today');
    expect(todayData?.count).toBe(3);
  });

  it('counts a record created yesterday correctly', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const records = [{ createdAt: yesterday.toISOString() }];
    const result = generateLast7DaysChartData(records, 'count');
    const yesterdayData = result.find(r => r.date === 'Yesterday');
    expect(yesterdayData?.count).toBe(1);
  });

  it('ignores records older than 7 days', () => {
    const old = new Date();
    old.setDate(old.getDate() - 10);
    const result = generateLast7DaysChartData([{ createdAt: old.toISOString() }], 'count');
    const total = result.reduce((sum, r) => sum + r.count, 0);
    expect(total).toBe(0);
  });

  it('ignores records without createdAt field', () => {
    const result = generateLast7DaysChartData([{ name: 'no date' }], 'count');
    const total = result.reduce((sum, r) => sum + r.count, 0);
    expect(total).toBe(0);
  });

  it('uses a custom countKey correctly', () => {
    const todayRecord = { createdAt: new Date().toISOString() };
    const result = generateLast7DaysChartData([todayRecord], 'leads');
    const todayData = result.find(r => r.date === 'Today');
    expect(todayData?.leads).toBe(1);
    expect(todayData?.count).toBeUndefined();
  });

  it('returns data in chronological order (oldest first, today last)', () => {
    const result = generateLast7DaysChartData([], 'count');
    const lastItem = result[result.length - 1];
    expect(lastItem.date).toBe('Today');
  });
});
