import React from "react";
import { useParams } from "react-router-dom";
import ListItem from "./ListItem/ListItem";

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

const ItemListContainer = (props) => {
    const { categoryId } = useParams();
    console.log("Categoria: ", categoryId);

    let productsToShow = [];
    if (categoryId !== undefined) {
        productsToShow = categorias[categoryId];
    } else {
        productsToShow = Object.values(categorias).flat();
    }

    return (
        <div>
            <h3>{props.greeting}</h3>
            {productsToShow.map(producto => <ListItem producto={producto} key={producto.id}></ListItem>)}
        </div>
    );
}
export default ItemListContainer