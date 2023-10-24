import axios from "axios";
import url from "../url";

interface OrderItem {
    menuId: number;
    quantity: number;
}

interface Order {
    customerId: number;
    orderItem: OrderItem[];
}

const OrderFunctions = axios.create({
    baseURL: `${url}/order`
})

export const getOrder = async () => {
    const response = await OrderFunctions.get(`/`);
    return response.data;
}

export const getOrderById = async (order_id: number) => {
    const response = await OrderFunctions.get(`/w-order/${order_id}`);
    return response.data;
}

export const getOrderByCusId = async (customer_id: number) => {
    const response = await OrderFunctions.get(`/w-customer/${customer_id}`);
    return response.data;
}

export const createOrder = async (data: Order) => {
    const response = await OrderFunctions.post(`/`, data);
    return response.data;
}

export const updateOrder = async (id: number, status: string) => {
    const response = await OrderFunctions.put(`/updatestatus/${id}`, status);
    return response.data;
}
