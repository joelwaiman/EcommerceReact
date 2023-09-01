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

    return (
    <>
        <div style={styles.count}>
            <button style={styles.button} onClick = {HandlerClickRestar}>-</button>
            <h3>{contador}</h3>
            <button style={styles.button} onClick = {HandlerClickSumar}>+</button>
        </div>
        <button disabled = {stock === 0} style={styles.button} onClick = {()=>onAdd(contador)}>
            <span>{stock === 0 ? "No tenemos stock" : "Agregar al carrito"}</span>
        </button>
    </>
    )
};

const styles = {
    count : {
        display: 'flex',
        alignItems: 'center',
    },
    button : {
        cursor: 'pointer',
        margin : '7px 10px' ,
        fontSize: 17,
        padding: '0.5rem 2rem',
        border: 'transparent',
        boxShadow: '2px 2px 3px rgb(190, 190, 190)',
        background: '#9DB2BF',
        color: 'white',
        borderRadius: 4,
    },
    
}