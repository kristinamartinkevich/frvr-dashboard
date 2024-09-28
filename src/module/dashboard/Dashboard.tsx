import { useEffect, useMemo } from "react";
import { fetchOvertime } from "../../utils/apiService";
import { Suspense, lazy } from 'react';
import { useDashboardStore } from "@/store";
import { Overtime, OvertimeKey } from "@/model/model";
import { filterOvertimes } from "@/utils/utils";

const Loader = lazy(() => import('../common/Loader'));
const NoResults = lazy(() => import('../common/NoResults'));
const LineChartComponent = lazy(() => import('../common/LineChart'));
const Filters = lazy(() => import('../dashboard/Filters'));

function Dashboard() {
    const {
        loading,
        setLoading,
        overtimes,
        setOvertimes,
        selectedProperties,
        startDate,
        endDate
    } = useDashboardStore();

    const getData = async (length: number) => {
        setLoading(true);
        try {
            const overtimeResponse = await fetchOvertime(length);
            if (overtimeResponse.data) {
                setOvertimes(overtimeResponse.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData(90);
    }, []);

    const filteredOvertimes: Overtime[] =
        useMemo(() => filterOvertimes(overtimes, startDate, endDate), [overtimes, startDate, endDate]);


    return (
        <div className="mt-5 h-full">
            <Suspense>
                {loading ? (
                    <Loader />
                ) : (
                    overtimes.length > 0 ? (
                        <>
                            <div className="w-full flex flex-row gap-4 items-center mb-5">
                                <Filters />
                            </div>
                            <div className="w-full flex flex-row flex-wrap gap-4 items-center">
                                {Array.from(selectedProperties).map((selectedProperty) => (
                                    <LineChartComponent
                                        key={selectedProperty}
                                        seriesData={filteredOvertimes.map(item => item[selectedProperty as OvertimeKey])}
                                        xAxisData={filteredOvertimes.map(item => new Date(item.date))}
                                        selectedProperty={selectedProperty as OvertimeKey}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <NoResults onButtonClick={() => getData(50)} />
                    )
                )}
            </Suspense>
        </div>
    );
}

export default Dashboard;
