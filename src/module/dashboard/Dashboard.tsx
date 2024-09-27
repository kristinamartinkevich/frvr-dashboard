import { useEffect } from "react";
import { fetchOvertime } from "../../utils/apiService";
import { Suspense, lazy } from 'react';
import { useDashboardStore } from "@/store";

const Loader = lazy(() => import('../common/Loader'));
const NoResults = lazy(() => import('../common/NoResults'));
const LineChartComponent = lazy(() => import('../common/LineChart'));

function Dashboard() {
    const {
        loading,
        setLoading,
        overtimes,
        setOvertimes,
        selectedProperty,
        startDate,
        endDate } = useDashboardStore();


    const getData = async (length: number) => {
        try {
            setLoading(true)
            const overtimeResponse = await fetchOvertime(length);
            if (overtimeResponse.data) {
                setOvertimes(overtimeResponse.data);
            }
        } catch (error) {
            console.error('Error in fetching data:', error);
        }
        finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getData(50);
    }, []);

    const filteredOvertimes = overtimes.filter(item => {
        const itemDate = new Date(item.date);
        const isWithinDateRange = (!startDate || itemDate >= new Date(startDate)) &&
            (!endDate || itemDate <= new Date(endDate));
        return isWithinDateRange;
    });

    return (
        <div className="mt-5">
            {
                !loading ?
                    (overtimes.length > 0 ? (
                        <div className="w-full">
                            <Suspense>
                                <LineChartComponent
                                    seriesData={filteredOvertimes.map(item => item[selectedProperty])}
                                    xAxisData={filteredOvertimes.map(item => new Date(item.date))}
                                />
                            </Suspense>
                        </div>
                    ) :
                        <Suspense>
                            <NoResults onButtonClick={() => getData(50)} />
                        </Suspense>
                    )
                    :
                    <Suspense>
                        <Loader />
                    </Suspense>
            }
        </div >
    );
}

export default Dashboard;
