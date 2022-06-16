import React, { useState } from 'react'
import {crearTipoEquipos} from '../../services/tipoEquipoService'

export const TipoView = () => {

  const [valoresForm, setValoresForm] = useState({});
  const { nombre = '', estado = '' } = valoresForm;

  const handleOnChange = (e) => {
    setValoresForm({...valoresForm, [e.target.name]: e.target.value });
  }

  const handleCrearTipoEquipo = async (e) => {
    e.preventDefault();
    console.log(valoresForm);
    try {
      const resp = await crearTipoEquipos (valoresForm);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container_fluid'>
      <form onSubmit={(e) => handleCrearTipoEquipo(e)}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input required name='nombre' value={nombre} type="text" className="form-control"
            onChange={(e) => handleOnChange(e)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Estado</label>
          <select required name='estado' value={estado} className="form-select"
            onChange={(e) => handleOnChange(e)} >
            <option selected value="">---Seleccione---</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <button className="btn btn-success">Guardar</button>
      </form>
    </div>
  )
}