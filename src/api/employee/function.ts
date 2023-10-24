import axios from "axios";
import url from "@/api/url";

const employeeFunction = axios.create({
    baseURL: `${url}/employee`
})

interface Employee {
    firstName: string;
    lastName: string;
    age: number;
    tel: string;
}

export const getEmployee = async () => {
    const response = await employeeFunction.get(`/`);
    return response.data;
}

export const createEmployee = async (data:Employee) => {
    const response = await employeeFunction.post(`/`, data);
    return response.data;
}

export const updateEmployee = async (id: number, data:Employee) => {
    const response = await employeeFunction.put(`/${id}`, data);
    return response.data;
}

export const deleteEmployee = async (id: number) => {
    const response = await employeeFunction.delete(`/${id}`);
    return response.data;
}
