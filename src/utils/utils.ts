import { Overtime } from "@/model/model";

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min: number, max: number) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function getRandomDate(startDate: string, endDate: string) {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const randomTimestamp = Math.floor(Math.random() * (end - start + 1)) + start;

    return new Date(randomTimestamp);
}


export function generateRandomData(length: number) {
    const totals = Array.from({ length: length }, () => ({
        dailyImpressions: getRandomInt(10000, 20000),
        ad_requests: getRandomInt(15000, 25000),
        revenue: getRandomFloat(50, 150),
    }));

    const overtime = Array.from({ length: length }, () => {
        const date = getRandomDate('2023-01-01', '2024-12-31');
        return {
            date: date.toISOString().split('T')[0], // Format the date as YYYY-MM-DD
            impressions: getRandomInt(10000, 20000),
            ad_requests: getRandomInt(15000, 25000),
            revenue: getRandomFloat(50, 150),
        };
    });

    return JSON.stringify({ totals, overtime }, null, 2); // Return the JSON as a string
}

export const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0'); // Get the day and pad with 0 if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-based) and pad with 0
    const year = date.getFullYear(); // Get the full year
    return `${day}/${month}/${year}`; // Return formatted date
};

export const formatDateRange = (e: any) => {
    const startYear = e.start.year;
    const startMonth = String(e.start.month).padStart(2, '0'); // Pad month to 2 digits
    const startDay = String(e.start.day).padStart(2, '0'); // Pad day to 2 digits

    const endYear = e.end.year;
    const endMonth = String(e.end.month).padStart(2, '0'); // Pad month to 2 digits
    const endDay = String(e.end.day).padStart(2, '0'); // Pad day to 2 digits

    const startDate = `${startYear}-${startMonth}-${startDay}`;
    const endDate = `${endYear}-${endMonth}-${endDay}`;
    return { startDate, endDate }
};

function formatToK(number: number) {
    return (number / 1000).toFixed(2) + 'K';
}

export const sortDataForCharts = (xAxisData: Date[], seriesData: number[]) => {
    const sortedData = xAxisData
        .map((date, index) => ({ date, value: seriesData[index] }))
        .sort((a, b) => a.date.getTime() - b.date.getTime());

    const sortedXAxisData = sortedData.map(item => item.date);
    const sortedSeriesData = sortedData.map(item => item.value);
    const totalSum = formatToK(Math.round(seriesData.reduce((sum, value) => sum + value, 0)));

    return { sortedXAxisData, sortedSeriesData, totalSum };
};

export const filterOvertimes = (overtimes: Overtime[], startDate: string, endDate: string) => {
    return overtimes.filter(item => {
        const itemDate = new Date(item.date);
        return (!startDate || itemDate >= new Date(startDate)) &&
            (!endDate || itemDate <= new Date(endDate));
    });
};