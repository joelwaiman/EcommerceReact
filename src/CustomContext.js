import React, {createContext , useState} from "react";

export const Context = createContext();

export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0)

    const addItem = (item, cantidad)=>{
        console.log(`Esta funcion agrega ${cantidad} cantidades de el producto ${item}`);
    }

    const deleteItem = ()=>{

    }

    const actualizarTotales = ()=>{

    }

    const IsInCart = ()=>{

    }

    const clear = ()=>{
        setCart ([]);
        setQty(0);
        setTotal(0);
    }
    
    return(
        <Context.Provider value={{cart, qty, total, addItem, deleteItem, clear}}>
        {children}
        </Context.Provider>
    )
}