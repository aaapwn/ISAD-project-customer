import axios from "axios";
import url from "@/api/url";

const menuItemFunction = axios.create({
    baseURL: `${url}/menu/item`
})

interface MenuItem {
    name: string;
    price: number;
    menuCategoryId: number;
}

export const getMenuItem = async () => {
    const response = await menuItemFunction.get(`/`);
    return response.data;
}

export const createMenuItem = async (data:MenuItem) => {
    const response = await menuItemFunction.post(`/`, data);
    return response.data;
}

export const updateMenuItem = async (id: number, data:MenuItem) => {
    const response = await menuItemFunction.put(`/${id}`, data);
    return response.data;
}

export const deleteMenuItem = async (id: number) => {
    const response = await menuItemFunction.delete(`/${id}`);
    return response.data;
}
