import React from "react";
import { style } from "./ItemListContainer.style";
import {ComponenteEstado} from "./ComponenteEstado"


const ItemListContainer = () => {

    const mensaje = "WELCOME"

    const onAdd = () => {
        console.log("Agregaste al carrito");
    }

    return (
        <div style = {style.container}>
            <h1 style = {style.title}>{mensaje}</h1>
            <ComponenteEstado stock = {5} onAdd = {onAdd}/>
        </div>

    )

}

export default ItemListContainer