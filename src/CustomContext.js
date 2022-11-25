import React, {createContext , useState} from "react";

export const Context = createContext();

export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0)
    const [userInfo, setUserInfo] = useState()

    const addItem = (item, cantidad)=>{
        if(IsInCart(item.id)){
            const modificado = cart.map((producto) => {
                if (producto.id === item.id) {
                    producto.cantidad += cantidad;
                    }
                    return producto;
                });
                setCart(modificado);
        }else{
            setCart([...cart, {...item, cantidad}])
        }
        setQty(qty + cantidad);
        setTotal( total + (item.price * cantidad));

    }

    const addUserInfo = (nombre, apellido, email, id)=>{
        const myInfo ={
            nombre: nombre,
            apellido: apellido,
            email: email,
            id: id
        }
        setUserInfo(myInfo)
    }

    const deleteItem = (id)=>{
        const found = cart.find(producto => producto.id === id)
        setCart(cart.filter(item => item.id !== id))
        setQty(qty - found.cantidad)
        setTotal(total - (found.price * found.cantidad))
    }

    const IsInCart = (id)=>{
        return cart.some(item => item.id === id);
    }

    const clear = ()=>{
        setCart ([]);
        setQty(0);
        setTotal(0);
    }
    
    return(
        <Context.Provider value={{cart, qty, total, userInfo,addUserInfo, addItem, deleteItem, clear}}>
        {children}
        </Context.Provider>
    )
}