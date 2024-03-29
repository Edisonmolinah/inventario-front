import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Inventarios</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" 
                            aria-current="page" 
                            to="/"
                            activeClassName="active"
                            exact>
                            Activos
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" 
                            aria-current="page" to="/usuarios"
                            activeClassName="active"
                            exact>
                            Usuarios
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" 
                            aria-current="page" to="/marcas"
                            activeClassName="active"
                            exact>
                            Marcas
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" 
                            aria-current="page" 
                            to="/estados"
                            activeClassName="active"
                            exact>
                            Estados
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" 
                            aria-current="page" to="/tipos"
                            activeClassName="active"
                            exact>
                            Tipos
                        </NavLink>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}