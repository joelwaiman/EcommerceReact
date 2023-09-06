import React, { useContext } from "react";
import { Context } from "../../../CustomContext";
import { FaTrash } from "react-icons/fa";
import styles from './ItemCart.module.css'

const ItemCart = ({ producto }) => {
    const { deleteItem } = useContext(Context)
    return (
        <div className={styles.contenedor}>
            <img className={styles.img} src={producto.image} alt={producto.title} />
            <h4 key={producto.id}>{producto.title}</h4>
            <p>Cantidad: {producto.cantidad}</p>
            <p>${producto.price * producto.cantidad}</p>
            <button className={styles.delete} onClick={() => deleteItem(producto.id)}>
                <FaTrash />
            </button>
        </div>
    )
}

export default ItemCart;