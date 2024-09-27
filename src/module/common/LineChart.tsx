import { lazy, Suspense, useMemo } from "react";
import { LineChart } from "@mui/x-charts";
import { colorMap, selectedPropertiesMap } from "../../model/model";
import { useDashboardStore } from "@/store";
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { sortDataForCharts } from "@/utils/utils";
import { Card, CardBody, Divider } from "@nextui-org/react";

const Filters = lazy(() => import('../dashboard/Filters'));

interface LineChartProps {
    xAxisData: Date[];
    seriesData: number[];
}

function LineChartComponent(props: LineChartProps) {
    const { xAxisData, seriesData } = props;
    const { selectedProperty } = useDashboardStore();

    const { sortedXAxisData, sortedSeriesData, totalSum } = useMemo(() => sortDataForCharts(xAxisData, seriesData), [xAxisData, seriesData]);

    return (
        <div>
            <div className="w-full flex flex-row gap-4 items-center mb-5">
                <Suspense>
                    <Filters />
                </Suspense>
                <div className="flex h-5 items-center space-x-4 text-small">
                    <Divider orientation="vertical" />
                    <div>
                        <div className="font-semibold text-slate-900 text-center">Total {selectedPropertiesMap[selectedProperty]}:</div>
                        <div className="text-center">{totalSum}</div>
                    </div>
                </div>
            </div>
            <Card className="p-3">
                <CardBody>
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
                    />      </CardBody>
            </Card>
        </div>
    );
}

export default LineChartComponent;
