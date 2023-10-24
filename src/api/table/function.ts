import axios from "axios";
import url from "@/api/url";

const tableFunction = axios.create({
    baseURL: `${url}/table`
})

export const getTable = async () => {
    const response = await tableFunction.get(`/`);
    return response.data;
}

export const getTableById = async (id: number) => {
    const response = await tableFunction.get(`/${id}`);
    return response.data;
}

export const createTable = async () => {
    const response = await tableFunction.post(`/`);
    return response.data;
}

export const updateStatusTable = async (id: number, ready: string) => {
    const response = await tableFunction.put(`/${id}`, ready);
    return response.data;
}

export const setTableCustomer = async (id: number, customerId: number) => {
    const response = await tableFunction.put(`/setcustomer/${id}`, customerId);
    return response.data;
}

export const deleteTable = async (id: number) => {
    const response = await tableFunction.delete(`/${id}`);
    return response.data;
}


