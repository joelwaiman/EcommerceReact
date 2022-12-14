import React, { useContext } from "react";
import { Context } from "../../../CustomContext";
import { style } from './Congrats.style'
import { Link } from "react-router-dom";

const Congrats = () => {
    const { userInfo, cart, clear } = useContext(Context);

    const finish = ()=>{
        clear()
    }

    return (
        <div style={style.container}>
            <h1>Gracias por tu compra</h1>
            <h2>Tu ID de compra es: {userInfo.id}</h2>
            <div style={style.containerInfo}>
                <div style={style.infoBuy}>
                    <h4>Detalles de la compra</h4>
                    <p>Nombre: {userInfo.nombre}</p>
                    <p>Apellido: {userInfo.apellido}</p>
                    <p>Email: {userInfo.email}</p>
                </div>
                <div style={style.infoBuy}>
                    {cart.map((producto) => {
                        return <div style={style.producto}>
                            <img style={style.img} src={producto.image} alt={producto.title} />
                            <h4 style={style.title} key={producto.id}>{producto.title}</h4>
                            <p style={style.text}>Cantidad: {producto.cantidad}</p>
                            <p style={style.text}>${producto.price * producto.cantidad}</p>
                        </div>
                    })}
                </div>
            </div>
            <Link to="/">
                <button onClick={finish}>Volver al Inicio</button>
            </Link>
        </div>
    )
}

export default Congrats;