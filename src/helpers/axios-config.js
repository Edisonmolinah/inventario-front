import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://inventario-back-iud.herokuapp.com/'
});

export {
    axiosInstance
}