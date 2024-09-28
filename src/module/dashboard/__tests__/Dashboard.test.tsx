import { act } from "@testing-library/react";
import { useDashboardStore } from "@/store";
import { Overtime } from "@/model/model";
import { generateRandomData } from "@/utils/utils";


// Mock the utils
jest.mock("@/utils/utils", () => ({
    formatDateRange: jest.fn(),
    generateRandomData: jest.fn(() => JSON.stringify({
        overtime: [
            { date: "2023-09-01", impressions: 100, ad_requests: 200, revenue: 300 },
            { date: "2023-09-02", impressions: 150, ad_requests: 250, revenue: 350 }
        ]
    })),
}));

describe('Dashboard Store', () => {
    // Test updating selected properties
    it('should update selectedProperties', () => {
        const { setSelectedProperties } = useDashboardStore.getState();

        act(() => {
            setSelectedProperties(new Set(["ad_requests"]));
        });

        expect(useDashboardStore.getState().selectedProperties).toEqual(new Set(["ad_requests"]));
    });

    // Test updating loading state
    it('should update loading state', () => {
        const { setLoading } = useDashboardStore.getState();

        act(() => {
            setLoading(true);
        });

        expect(useDashboardStore.getState().loading).toBe(true);

        act(() => {
            setLoading(false);
        });

        expect(useDashboardStore.getState().loading).toBe(false);
    });

    // Test updating overtimes
    it('should update overtimes', () => {
        const { setOvertimes } = useDashboardStore.getState();
        const mockOvertimeData: Overtime[] = JSON.parse(generateRandomData(length)).overtime;

        act(() => {
            setOvertimes(mockOvertimeData);
        });

        expect(useDashboardStore.getState().overtimes).toEqual(mockOvertimeData);
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

    // Test updating loggedIn state
    it('should update loggedIn state', () => {
        const { setLoggedIn } = useDashboardStore.getState();

        act(() => {
            setLoggedIn(true);
        });

        expect(useDashboardStore.getState().loggedIn).toBe(true);

        act(() => {
            setLoggedIn(false);
        });

        expect(useDashboardStore.getState().loggedIn).toBe(false);
    });

});
