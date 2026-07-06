import { generateLast7DaysChartData } from "../../lib/chartUtils";

describe("generateLast7DaysChartData", () => {
    beforeAll(() => {
        jest.useFakeTimers("modern");
        // Set the system time to a fixed date for deterministic testing
        jest.setSystemTime(new Date(2026, 6, 6)); // July 6, 2026
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it("should generate exactly 7 data points with 0 counts when records are empty", () => {
        const result = generateLast7DaysChartData([]);
        
        expect(result).toHaveLength(7);
        expect(result[6].date).toBe("Today");
        expect(result[5].date).toBe("Yesterday");
        expect(result[6].count).toBe(0);
        expect(result[0].count).toBe(0);
    });

    it("should correctly count records for their respective dates", () => {
        const records = [
            { createdAt: "2026-07-06T10:00:00Z" }, // Today
            { createdAt: "2026-07-06T14:00:00Z" }, // Today
            { createdAt: "2026-07-05T09:00:00Z" }, // Yesterday
            { createdAt: "2026-07-01T12:00:00Z" }, // 5 days ago
            { createdAt: "2026-06-01T12:00:00Z" }  // Too old (should be ignored)
        ];

        const result = generateLast7DaysChartData(records);

        expect(result[6].count).toBe(2); // Today
        expect(result[5].count).toBe(1); // Yesterday
        expect(result[1].count).toBe(1); // 5 days ago (July 1st is the 2nd element, as July 6 is the 7th element)
        
        // Sum of all counts should be 4
        const totalCount = result.reduce((acc, curr) => acc + curr.count, 0);
        expect(totalCount).toBe(4);
    });

    it("should use custom countKey when provided", () => {
        const records = [
            { createdAt: "2026-07-06T10:00:00Z" }
        ];

        const result = generateLast7DaysChartData(records, "visitors");

        expect(result[6].visitors).toBe(1);
        expect(result[6].count).toBeUndefined();
    });
});
