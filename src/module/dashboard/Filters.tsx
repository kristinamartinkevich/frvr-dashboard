import { useDashboardStore } from "@/store";
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
        selectedProperties,
        setSelectedProperties,
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
        <div className="w-full flex flex-row gap-4 items-center mb-5">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Select
                    label="Select the property"
                    className="max-w-sm"
                    selectedKeys={selectedProperties}
                    selectionMode="multiple"
                    onSelectionChange={setSelectedProperties}
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
                    label="Period"
                    className="max-w-sm"
                    onChange={(e) => setDateRange(e)}
                />
            </div>
        </div>
    );
}

export default Filters;
