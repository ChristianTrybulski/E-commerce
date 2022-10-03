import React from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';

const categorias = { 
    "hombre": [
        { id: 0, nombre: "Botines", precio: "$2115,00", imagen: "/imgs/botines.jpg" },
        { id: 1, nombre: "Zapatilla", precio: "$3550,00", imagen: "/imgs/zapatilla.jpg" },
        { id: 2, nombre: "Zapatilla 2", precio: "$3550,00", imagen: "/imgs/zapatilla2.jpg" },
    ],
    "mujer": [
        { id: 3, nombre: "Producto 3", precio: "$15,00", imagen: "/imgs/botines.jpg" },
        { id: 4, nombre: "Producto 4", precio: "$50,00" }
    ],
    "niños": [
        { id: 5, nombre: "Producto 5", precio: "$5,00" },
        { id: 6, nombre: "Producto 6", precio: "$10,00" }
    ],
}

const ItemDetailContainer = (props) => {
    const { id } = useParams();
    const product = Object.values(categorias).flat()[id];

    return (
        <div className="card card-product">
            <img src={product.imagen} class="card-img-top" alt="imagen"></img>
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">Precio: {product.precio}</p>
            </div>
        </div>
    );
}
export default ItemDetailContainer