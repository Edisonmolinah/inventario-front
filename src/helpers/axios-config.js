import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://inventario-backend.vercel.app/'
});

export {
    axiosInstance
}