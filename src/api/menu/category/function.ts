import axios from "axios";
import url from "@/api/url";

const getMenuCategoryFunction = axios.create({
    baseURL: `${url}/menu/category`
})

export const getMenuCategory = async () => {
    const response = await getMenuCategoryFunction.get(`/`);
    return response.data;
}

export const createMenuCategory = async (name: string) => {
    const response = await getMenuCategoryFunction.post(`/`, name);
    return response.data;
}

export const updateMenuCategory = async (id: number, name: string) => {
    const response = await getMenuCategoryFunction.put(`/${id}`, name);
    return response.data;
}

export const deleteMenuCategory = async (id: number) => {
    const response = await getMenuCategoryFunction.delete(`/${id}`);
    return response.data;
}
