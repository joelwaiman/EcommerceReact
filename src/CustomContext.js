import React, {createContext , useState} from "react";

export const Context = createContext();

export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0)

    const addItem = (item, cantidad)=>{
        if (IsInCart(item.id)){
            const found = cart.find(producto => producto.id === item.id);
            const index = cart.indexOf(found);
            const aux = [...cart];
            aux[index].cantidad += cantidad;
            setCart(aux);
        }
        else{
            setCart([...cart, {...item , cantidad}])
        }
        setQty(qty + cantidad);
        setTotal (total + (item.price * cantidad))
    }

    const deleteItem = (id)=>{
        const found = cart.find(producto => producto.id === id)
        setCart(cart.filter(item => item.id !== id))
        setQty(qty - found.cantidad)
        setTotal(total - (found.price * found.cantidad))
    }

    const IsInCart = (id)=>{
        cart.some(item=>item.id === id)
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