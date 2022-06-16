import { axiosInstance } from '../helpers/axios-config';

// GET http://localhost:4000/inventario
// POST http://localhost:4000/inventario
// PUT http://localhost:4000/inventario

const getInventarios = () => {
    return axiosInstance.get('inventario',{
        headers: {
            'Content-type': 'application/json'
        }
    }
    );      
}

const crearInventario = (data) => {
    return axiosInstance.post('inventario', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editarInventario = (inventarioId, data) => {
    return axiosInstance.put(`inventario/${inventarioId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const getInventariosPorId = (inventarioId) => {
    return axiosInstance.get(`inventario/${inventarioId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });

}

export {
    getInventarios, crearInventario, editarInventario, getInventariosPorId
}