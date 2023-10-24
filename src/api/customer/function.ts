import Axios from 'axios';
import url from '../url';

const CustomerFunctions = Axios.create({
    baseURL: `${url}/customer`
})

export const getCustomer = async () => {
    const response = await CustomerFunctions.get(`/`);
    return response.data;
}

export const getCustomerById = async (id: number) => {
    const response = await CustomerFunctions.get(`/${id}`);
    return response.data;
}

export const updateStatusCustomer = async (id: number, status:string) => {
    const response = await CustomerFunctions.put(`/updatestatus/${id}`, {status});
    return response.data;
}

export const deleteCustomer = async (id: number) => {
    const response = await CustomerFunctions.delete(`/${id}`);
    return response.data;
}
