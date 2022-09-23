import React from "react";
import './ListItem.css';

const ListItem = (props) => {
    return (
        <div className="card card-product">
            <div className="card-body">
                <h5 className="card-title">{props.producto.nombre}</h5>
                <p className="card-text">Precio: {props.producto.precio}</p>
                <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    );
}
export default ListItem