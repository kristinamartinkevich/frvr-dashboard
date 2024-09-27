import React, { useMemo } from "react";
import { LineChart } from "@mui/x-charts";
import { colorMap, selectedPropertiesMap } from "../../model/model";
import { useDashboardStore } from "@/store";
import { axisClasses } from '@mui/x-charts/ChartsAxis';

interface LineChartProps {
    xAxisData: Date[];
    seriesData: number[];
}

function LineChartComponent(props: LineChartProps) {
    const { xAxisData, seriesData } = props;
    const { selectedProperty } = useDashboardStore();

    const { sortedXAxisData, sortedSeriesData, totalSum } = useMemo(() => {
        const sortedData = xAxisData
            .map((date, index) => ({ date, value: seriesData[index] }))
            .sort((a, b) => a.date.getTime() - b.date.getTime());

        const sortedXAxisData = sortedData.map(item => item.date);
        const sortedSeriesData = sortedData.map(item => item.value);
        const totalSum = Math.round(seriesData.reduce((sum, value) => sum + value, 0));

        return { sortedXAxisData, sortedSeriesData, totalSum };
    }, [xAxisData, seriesData]);



    return (
        <div>
            <div>
                Total {selectedPropertiesMap[selectedProperty]}: {totalSum}
            </div>
            <LineChart
                xAxis={[
                    {
                        scaleType: "utc",
                        data: sortedXAxisData,
                        valueFormatter: (date) =>
                            date.toISOString().split('T')[0]

                    },
                ]}
                series={[
                    {
                        data: sortedSeriesData,
                        color: colorMap[selectedProperty],
                    },
                ]}
                sx={{
                    [`.${axisClasses.root}`]: {
                        [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                            stroke: 'gray',
                        },
                        [`.${axisClasses.tickLabel}`]: {
                            fill: 'gray',
                        },
                    },
                }}
                height={300}
            />
        </div>
    );
}

export default LineChartComponent;
