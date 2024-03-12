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
        <div style={styles.countContainer}>
            <button style={styles.Countbutton} onClick = {HandlerClickRestar}>-</button>
            <h3 style={styles.count}>{contador}</h3>
            <button style={styles.Countbutton} onClick = {HandlerClickSumar}>+</button>
        </div>
        <button disabled = {stock === 0} style={styles.button} onClick = {()=>onAdd(contador)}>
            <span>{stock === 0 ? "No tenemos stock" : "Agregar al carrito"}</span>
        </button>
    </>
    )
};

const styles = {
    countContainer : {
        display: 'flex',
        alignItems: 'center',
    },
    count:{
        margin: '0 6px'
    },
    button : {
        cursor: 'pointer',
        width: 'fit-content',
        margin : '7px 0' ,
        fontSize: 17,
        padding: '10px 15px',
        border: 'transparent',
        background: '#EAEAEA',
        color: 'black',
        borderRadius: 20,
    },
    Countbutton : {
        cursor: 'pointer',
        margin : '7px 0' ,
        fontSize: 17,
        padding: '5px 15px',
        border: 'transparent',
        background: '#EAEAEA',
        color: 'black',
        borderRadius: 20,
    },
    
}