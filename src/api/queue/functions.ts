import Axios from 'axios';
import url from '../url';

const QueueFunctions = Axios.create({
    baseURL: `${url}/queue`
})

export const getQueue = async () => {
    const response = await QueueFunctions.get(`/`);
    return response.data;
}

export const createQueue = async () => {
    const response = await QueueFunctions.post(`/`);
    return response.data;
}

export default QueueFunctions;
