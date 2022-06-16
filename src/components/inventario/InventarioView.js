import React, { useState, useEffect } from 'react';
import { getInventarios } from '../../services/inventarioService';
import { InventarioCard } from './InventarioCard';
import { InventarioNew } from './InventarioNew';
import { BsFillPlusCircleFill } from 'react-icons/bs';



export const InventarioView = () => {

const [inventarios, setInvetarios] = useState([]);
const [ openModal, setOpenModal ] = useState(false);

  const listarInventarios = async () => {
    try {
      const resp = await getInventarios();
      setInvetarios(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOpenModal =() => {
    setOpenModal(!openModal);
  }
  useEffect(() => {
    listarInventarios();
  }, []);

  return (
    <div className='container'>
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          inventarios.map((inventario) => {
            return <InventarioCard key={inventario._id} inventario={inventario} />
          })
        }
      </div>  
       {
        openModal ? <InventarioNew handleOpenModal={handleOpenModal}
        listarInventarios={ listarInventarios } />   
        :<BsFillPlusCircleFill className="agregar" onClick={ handleOpenModal}/>
        }
    </div>
  )
}