import { useDashboardStore } from "@/store";
import { Overtime } from "../../model/model";
import { Select, SelectItem } from "@nextui-org/react";
import { DateRangePicker } from "@nextui-org/date-picker";
import { parseDate } from "@internationalized/date";
import { formatDateRange } from "@/utils/utils";
import Box from '@mui/material/Box';

const options = [
    { value: "impressions", label: "Impressions" },
    { value: "ad_requests", label: "Ad Requests" },
    { value: "revenue", label: "Revenue" },
];

function Filters() {
    const {
        selectedProperty,
        setSelectedProperty,
        startDate,
        setStartDate,
        endDate,
        setEndDate } = useDashboardStore();

    const setDateRange = (e: any) => {
        const { startDate, endDate } = formatDateRange(e);

        setStartDate(startDate);
        setEndDate(endDate);
    };

    return (
        <Box sx={{ display: 'flex' }} className="gap-2">
            <Select
                label="Select the property"
                className="max-w-xs"
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value as keyof Overtime)}
            >
                {options.map((option) => (
                    <SelectItem key={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </Select>
            <DateRangePicker
                value={{
                    start: parseDate(startDate),
                    end: parseDate(endDate)
                }}
                label="Stay range"
                className="max-w-xs"
                onChange={(e) => setDateRange(e)}
            />
        </Box>
    );
}

export default Filters;
