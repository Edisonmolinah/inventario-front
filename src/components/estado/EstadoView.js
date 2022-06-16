import React, { useState } from 'react'
import { crearEstadoEquipo } from '../../services/estadoEquipoService'

export const EstadoView = () => {

  const [valoresForm, setValoresForm] = useState({});
  const { nombre = '', estado = '' } = valoresForm;

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  }

  const handleCrearEstadoEquipos = async (e) => {
    e.preventDefault();
    console.log(valoresForm);
    try {
      const resp = await crearEstadoEquipo(valoresForm);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className='container_fluid'>
        <form onSubmit={(e) => handleCrearEstadoEquipos(e)}>
          <div className="mb-3">
            <label className="form-label">Nombre del estado</label>
            <input required name='nombre' value={nombre} type="text" className="form-control"
              onChange={(e) => handleOnChange(e)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Estado</label>
            <select required name='estado' value={estado} className="form-select"
              onChange={(e) => handleOnChange(e)} >
              <option selected value="">Seleccione el Estado</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <button className="btn btn-success">Guardar</button>
        </form>
      </div>

    </div>
  )
}

