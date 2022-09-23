import React from "react";
import ListItem from "./ListItem/ListItem";

const ItemListContainer = (props) => {
    return (
        <div>
            <h3>{props.greeting}</h3>
            <h5>Listado de items de la categoria <strong>{props.categoria}</strong></h5>
            {props.productos.map(producto => <ListItem producto={producto} key={producto.id}></ListItem>)}
        </div>
    );
}
export default ItemListContainer