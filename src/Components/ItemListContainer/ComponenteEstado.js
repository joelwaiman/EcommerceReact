import React, { useState } from "react";

export const ComponenteEstado = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1);

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
    <div>
        <h1>Componente contador</h1>
        <button onClick = {HandlerClickRestar}>-</button>
        <p>{contador}</p>
        <button onClick = {HandlerClickSumar}>+</button> <br />
        <button onClick = {HandlerClickAgregar}>Agregar al carrito</button>
    </div>
    )
};