import React, { useContext } from "react";
import { Context } from "../../../CustomContext";
import {style} from './Congrats.style'

const Congrats = () => {
    const { userInfo, cart } = useContext(Context);

    return (
        <div style={style.container}>
            <h1>Gracias por tu compra</h1>
            <h2>Tu ID de compra es: {userInfo.id}</h2>
            <h4>Detalles de la compra</h4>
            <div style={style.compra}>
                <div style={style.user}>
                    <h5>Nombre: {userInfo.nombre}</h5>
                    <h5>Apellido: {userInfo.apellido}</h5>
                    <h5>Email: {userInfo.email}</h5>
                </div>
                {cart.map((producto) => {
                    return <div style={style.producto}>
                        <img style={style.img} src={producto.image} alt={producto.title} />
                        <div >
                            <h4 key={producto.id}>{producto.title}</h4>
                            <p>Cantidad: {producto.cantidad}</p>
                            <p>${producto.price * producto.cantidad}</p>
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}

export default Congrats;