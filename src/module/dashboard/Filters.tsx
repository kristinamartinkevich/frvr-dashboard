import { useDashboardStore } from "@/store";
import { Overtime } from "../../model/model";
import { Select, SelectItem } from "@nextui-org/react";
import { DateRangePicker } from "@nextui-org/date-picker";
import { parseDate } from "@internationalized/date";
import { formatDateRange } from "@/utils/utils";

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
        <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
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
            </div>
        </>
    );
}

export default Filters;
