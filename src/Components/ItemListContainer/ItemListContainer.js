import React from "react";
import { style } from "./ItemListContainer.style";


const ItemListContainer = () => {

    const mensaje = "WELCOME"

    return (
        <div style = {style.container}>
            <h1 style = {style.title}>{mensaje}</h1>
        </div>

    )

}

export default ItemListContainer