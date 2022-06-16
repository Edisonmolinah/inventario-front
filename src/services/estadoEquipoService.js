import {axiosInstance} from '../helpers/axios-config';


const getEstadoEquipo = () => {
    return axiosInstance.get('estado-equipo',{
        headers: {
            'Content-type': 'application/jason'
        }
    })
}

const crearEstadoEquipo = (data) => {
    return axiosInstance.post('estado-equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });

}

const editEstadoEquipo = (estadoequipoId, data) => {
    return axiosInstance.put(`estado-equipo/${estadoequipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });

}

export{
    getEstadoEquipo, crearEstadoEquipo, editEstadoEquipo
}