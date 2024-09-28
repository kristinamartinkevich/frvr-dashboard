import { create } from 'zustand';
import { Overtime, Totals } from './model/model';
import { SharedSelection } from '@nextui-org/react';

interface DashboardStore {
    totals: Totals[];
    overtimes: Overtime[];
    selectedProperties: SharedSelection;
    startDate: string;
    endDate: string;
    loading: boolean;
    loggedIn: boolean;
    setTotals: (totals: Totals[]) => void;
    setOvertimes: (overtimes: Overtime[]) => void;
    setSelectedProperties: (properties: SharedSelection) => void;
    setStartDate: (date: string) => void;
    setEndDate: (date: string) => void;
    setLoading: (loading: boolean) => void;
    setLoggedIn: (loggedIn: boolean) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
    totals: [],
    overtimes: [],
    selectedProperties: new Set(["impressions"]),
    startDate: "2023-02-07",
    endDate: "2024-09-26",
    loading: false,
    loggedIn: false,
    setTotals: (totals) => set({ totals }),
    setOvertimes: (overtimes) => set({ overtimes }),
    setSelectedProperties: (selectedProperties) => set({ selectedProperties }),
    setStartDate: (date) => set({ startDate: date }),
    setEndDate: (date) => set({ endDate: date }),
    setLoading: (loading) => set({ loading: loading }),
    setLoggedIn: (loggedIn) => set({ loggedIn: loggedIn }),
}));
