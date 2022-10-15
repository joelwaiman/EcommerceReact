import React, {useEffect, useState} from "react";
import { style } from "./ItemListContainer.style";
import {ComponenteEstado} from "../../Cart/ComponenteEstado"


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const URL_BASE = 'https://fakestoreapi.com/products'

    useEffect(()=>{
        const getProducts = async () => {
            try{
                const res = await fetch(URL_BASE)
            }
            catch{
                console.log("Error");
            }
        }
    })

    return (
        <div style = {style.container}>
            <h1 style = {style.title}></h1>
            
        </div>

    )

}

export default ItemListContainer