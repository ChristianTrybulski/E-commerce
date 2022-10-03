import React from "react";
import './ListItem.css';
import { Link } from "react-router-dom";

const ListItem = (props) => {
    return (
        <div className="card card-product">
            <img src={props.producto.imagen} class="card-img-top" alt="imagen"></img>
            <div className="card-body">
                <h5 className="card-title">{props.producto.nombre}</h5>
                <p className="card-text">Precio: {props.producto.precio}</p>
                <Link className="dropdown-item" to={'/item/' + props.producto.id}><button className="btn btn-primary">Ver detalle</button></Link>
            </div>
        </div>
    );
}
export default ListItem