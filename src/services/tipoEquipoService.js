import { axiosInstance } from "../helpers/axios-config";

const getTipoEquipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const crearTipoEquipos = (data) => {
    return axiosInstance.post('tipo-equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editarTipoEquipos = (tipoEquiposId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoEquiposId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getTipoEquipos, crearTipoEquipos, editarTipoEquipos
}