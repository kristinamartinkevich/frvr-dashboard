import { create } from 'zustand';
import { Overtime, OvertimeKeys, Totals } from './model/model';

interface DashboardStore {
    totals: Totals[];
    overtimes: Overtime[];
    selectedProperty: OvertimeKeys;
    startDate: string;
    endDate: string;
    loading: boolean;
    loggedIn: boolean;
    drawerOpen: boolean;
    setTotals: (totals: Totals[]) => void;
    setOvertimes: (overtimes: Overtime[]) => void;
    setSelectedProperty: (property: OvertimeKeys) => void;
    setStartDate: (date: string) => void;
    setEndDate: (date: string) => void;
    setLoading: (loading: boolean) => void;
    setLoggedIn: (loggedIn: boolean) => void;
    setDrawerOpen: (drawerOpen: boolean) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
    totals: [],
    overtimes: [],
    selectedProperty: 'impressions',
    startDate: "2023-02-07",
    endDate: "2024-09-26",
    loading: false,
    loggedIn: false,
    drawerOpen: false,
    setTotals: (totals) => set({ totals }),
    setOvertimes: (overtimes) => set({ overtimes }),
    setSelectedProperty: (property) => set({ selectedProperty: property }),
    setStartDate: (date) => set({ startDate: date }),
    setEndDate: (date) => set({ endDate: date }),
    setLoading: (loading) => set({ loading: loading }),
    setLoggedIn: (loggedIn) => set({ loggedIn: loggedIn }),
    setDrawerOpen: (drawerOpen) => set({ drawerOpen: drawerOpen }),
}));
