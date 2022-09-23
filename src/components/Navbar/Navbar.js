import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/'>
                        <img alt="logo-digitalsport" src='/logo_digitalsport.png' width='60' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>{props.brand}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/hombre'>Hombre</Link></li>
                                    <li><Link className="dropdown-item" to='/mujer'>Mujer</Link></li>
                                    <li><Link className="dropdown-item" to='/niños'>Niños</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <CartWidget></CartWidget>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Navbar