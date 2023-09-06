import React, { useContext } from "react";
import { Context } from "../../../CustomContext";
import styles from './Congrats.module.css'
import { Link } from "react-router-dom";

const Congrats = () => {
    const { userInfo, cart, clear } = useContext(Context);

    const finish = () => {
        clear()
    }

    return (
        <div className={styles.container}>
            <h1>Gracias por tu compra</h1>
            <h3>Tu ID de compra es: <span className={styles.idText}>{userInfo.id}</span></h3>
            <div className={styles.containerInfo}>
                <div key={userInfo.id} className={styles.infoBuy}>
                    <h4>Detalles de la compra</h4>
                    <p>Nombre: {userInfo.nombre}</p>
                    <p>Apellido: {userInfo.apellido}</p>
                    <p>Email: {userInfo.email}</p>
                </div>
                <div className={styles.infoBuy}>
                    {cart.map((producto) => {
                        return <div className={styles.producto}>
                            <img className={styles.img} src={producto.image} alt={producto.title} />
                            <h4 className={styles.title} key={producto.id}>{producto.title}</h4>
                            <p className={styles.text}>Cantidad: {producto.cantidad}</p>
                            <p className={styles.text}>${producto.price * producto.cantidad}</p>
                        </div>
                    })}
                </div>
            </div>
            <Link to="/">
                <button className={styles.button} onClick={finish}>Volver al Inicio</button>
            </Link>
        </div>
    )
}

export default Congrats;