import React from "react"
import { useParams } from "react-router-dom"
import ItemListContainer from "../../ItemListContainer/ItemListContainer";

const categorias = { 
    "hombre": [
        { id: 0, nombre: "Producto 1", precio: "$2115,00" },
        { id: 1, nombre: "Producto 2", precio: "$3550,00" }
    ],
    "mujer": [
        { id: 2, nombre: "Producto 3", precio: "$15,00" },
        { id: 3, nombre: "Producto 4", precio: "$50,00" }
    ],
    "niños": [
        { id: 4, nombre: "Producto 5", precio: "$5,00" },
        { id: 5, nombre: "Producto 6", precio: "$10,00" }
    ],
  }

const Categorias = () => {
    const params = useParams();
    return (
        <ItemListContainer greeting={"Bienvenido a DigitalSport"} productos={categorias[params.categoria]} categoria={params.categoria}></ItemListContainer>
    )
}

export default Categorias