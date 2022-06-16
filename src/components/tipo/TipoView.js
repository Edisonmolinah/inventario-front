import React from 'react'

export const TipoView = () => {
  return (

    <div className="row g-2">
      <form>
        <div className="mb-3">
          <label for="inputNombre" className="form-label">Ingrese el Nombre</label>
          <input type="text" className="form-control" id="inputNombre" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <select class="form-select" aria-label="Default select example">
            <option selected>Selecciones el Estado de Equipo</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  )
}