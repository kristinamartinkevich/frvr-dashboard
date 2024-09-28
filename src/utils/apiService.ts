import axios from 'axios';
import { generateRandomData } from './utils';

const API_URL = 'http://localhost:3000';
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTotals = async () => {
    await delay(2000);
    const response = await axios.get(`${API_URL}/totals`);
    return response
};

export const fetchOvertime = async (length: number) => {
    await delay(2000);
    //const response = await axios.get(`${API_URL}/overtime`);
    // return response
    return {
        data: JSON.parse(generateRandomData(length)).overtime
    }
};
