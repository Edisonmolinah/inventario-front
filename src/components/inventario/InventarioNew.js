import React, {useState, useEffect} from 'react';
import { GrFormClose } from 'react-icons/gr';
import {getEstadoEquipo} from '../../services/estadoEquipoService'
import {getMarcas} from '../../services/marcaService'
import {getTipoEquipos} from '../../services/tipoEquipoService'
import {getUsuarios} from '../../services/usuarioService'
import {crearInventario} from '../../services/inventarioService'
import Swal from 'sweetalert2';

export const InventarioNew = ({ handleOpenModal, listarInventarios }) => {

    const [ usuarios, setUsuarios ] = useState([]);
    const [ marcas, setMarcas ] = useState([]);
    const [ tipos, setTipos ] = useState([]);
    const [estados, setEstados] = useState([]);
    const [ valoresForm, setValoresForm ] = useState([]);
    const {serial='', modelo='', descripcion='', color='', foto='', 
            fechaCompra='', precio='', usuario, marca, tipoEquipo, estadoEquipo } = valoresForm;




    const listarUsuarios = async () => {
        try{
            const {data} = await getUsuarios();
            setUsuarios(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        listarUsuarios()
    }, []);

    const listarMarcas = async () => {
        try{
            const {data} = await getMarcas();
            setMarcas(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        listarMarcas()
    }, []);

    const listarTipos = async () => {
        try{
            const {data} = await getTipoEquipos();
            setTipos(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        listarTipos()
    }, []);

    const listarEstados = async () => {
        try{
            const {data} = await getEstadoEquipo();
            setEstados(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        listarEstados()
    }, []);

    const handleOnChange= ({target}) => {
        const {name, value} = target;
        setValoresForm({...valoresForm,[name]: value}) //Spread
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const inventario = {
            serial, modelo, descripcion, foto, color, precio, fechaCompra,
            usuario: {
                _id: usuario
            },
            marca:{
                _id: marca
            },
            tipoEquipo:{
                _id: tipoEquipo
            },
            estadoEquipo:{
                _id: estadoEquipo
            }
        }
        console.log(inventario);
        try{
            Swal.fire({
                allowOutsideClick: false,
                text:'Cargando....'
            });
            Swal.showLoading();
            const { data } = await crearInventario(inventario);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarInventarios();
        }catch(error){
            console.log(error);
            Swal.close();
        }

    }


    return (
        <div className='sidebar'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebar-header'>
                            <h3>Nuevo Inventario </h3>
                            < GrFormClose className='closet' onClick={handleOpenModal} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <hr />
                    </div>
                </div>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <div className="row">
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Serial</label>
                                <input type="text" name='serial' required
                                value={serial} 
                                onChange={(e)=> handleOnChange(e)} 
                                className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Modelo</label>
                                <input type="text" name='modelo' required
                                value={modelo}
                                onChange={(e)=> handleOnChange(e)}
                                className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Descripcion</label>
                                <input type="text" name='descripcion' required
                                value={descripcion}
                                onChange={(e)=> handleOnChange(e)}
                                className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Foto</label>
                                <input type="url" name='foto' 
                                required value={foto}
                                onChange={(e)=> handleOnChange(e)}
                                className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Color</label>
                                <input type="text" name='color'
                                required value={color}
                                onChange={(e)=> handleOnChange(e)}
                                className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Fecha Compra</label>
                                <input type="date" name='fechaCompra'
                                required value={fechaCompra}
                                onChange={(e)=> handleOnChange(e)}
                                className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Precio</label>
                                <input type="number" name='precio' required
                                value={precio}
                                onChange={(e)=> handleOnChange(e)}
                                className="form-control" />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label" >Usuario</label>
                                <select className="form-select" 
                                required onChange={(e)=> handleOnChange(e)} name='usuario' value={usuario}>
                                    <option>--Seleccione--</option>
                                    {
                                        usuarios.map(({_id, nombre}) => {
                                            return <option key={_id} value={_id} >{nombre}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label" >Marca</label>
                                <select className="form-select" 
                                required onChange={(e)=> handleOnChange(e)} name='marca' value={marca}>
                                    <option>--Seleccione--</option>
                                    {
                                        marcas.map(({_id, nombre}) => {
                                            return <option key={_id} value={_id} >{nombre}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label" >Tipo Equipo</label>
                                <select className="form-select"
                                required onChange={(e)=> handleOnChange(e)} name='tipoEquipo' value={tipoEquipo}>
                                    <option>--Seleccione--</option>
                                    {
                                        tipos.map(({_id, nombre}) => {
                                            return <option key={_id} value={_id} >{nombre}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Estado Equipo</label>
                                <select className="form-select"
                                required onChange={(e)=> handleOnChange(e)} name='estadoEquipo' value={estadoEquipo}>
                                    <option>--Seleccione--</option>
                                    {
                                        estados.map(({_id, nombre}) => {
                                            return <option key={_id} value={_id} >{nombre}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
