import { act } from "@testing-library/react";
import { useDashboardStore } from "@/store";

// Mock the utils
jest.mock("@/utils/utils", () => ({
    formatDateRange: jest.fn(),
}));

describe('Filters Store', () => {
    // Test updating selected properties
    it('should update selectedProperties', () => {
        const { setSelectedProperties } = useDashboardStore.getState();

        act(() => {
            setSelectedProperties(new Set(["ad_requests"]));
        });

        expect(useDashboardStore.getState().selectedProperties).toEqual(new Set(["ad_requests"]));
    });

    // Test updating start date
    it('should update startDate', () => {
        const { setStartDate } = useDashboardStore.getState();

        act(() => {
            setStartDate("2023-01-01");
        });

        expect(useDashboardStore.getState().startDate).toBe("2023-01-01");
    });

    // Test updating end date
    it('should update endDate', () => {
        const { setEndDate } = useDashboardStore.getState();

        act(() => {
            setEndDate("2023-12-31");
        });

        expect(useDashboardStore.getState().endDate).toBe("2023-12-31");
    });

});
