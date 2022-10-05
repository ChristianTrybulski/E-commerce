import React from "react";
import './ListItem.css';
import { Link } from "react-router-dom";

const ListItem = ({producto}) => {
    return (
        <div className="card card-product">
            <img src={producto.imagen} className="card-img-top" alt="imagen"></img>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: {producto.precio}</p>
                <Link className="dropdown-item" to={'/item/' + producto.id}><button className="btn btn-primary">Ver detalle</button></Link>
            </div>
        </div>
    );
}
export default ListItem