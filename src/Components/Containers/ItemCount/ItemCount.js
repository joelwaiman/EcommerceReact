import React, { useState } from "react";

export const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

    const HandlerClickSumar = () => {
        if(contador < stock){
           setContador(contador + 1) 
        }
    };

    const HandlerClickRestar = () => {
        if(contador > 1){
          setContador(contador - 1)  
        }
    };

    const HandlerClickAgregar = () => {
        onAdd() ;
    };

    return (
    <>
        <h3>{contador}</h3>
        <button onClick = {HandlerClickRestar}>-</button>
        <p>{contador}</p>
        <button onClick = {HandlerClickSumar}>+</button> <br />
        <button onClick = {HandlerClickAgregar}>Agregar al carrito</button>
    </>
    )
};