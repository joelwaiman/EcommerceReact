import React, { useContext } from "react";
import { Context } from "../../../CustomContext";
import { FaTrash } from "react-icons/fa";

const ItemCart = ({ producto }) => {
    const { deleteItem } = useContext(Context)
    return (
        <div style={styles.contenedor}>
            <img style={styles.img} src={producto.image} alt={producto.title} />
            <h4 key={producto.id}>{producto.title}</h4>
            <p>Cantidad: {producto.cantidad}</p>
            <p>${producto.price * producto.cantidad}</p>
            <button style={styles.delete} onClick={() => deleteItem(producto.id)}>
                <FaTrash />
            </button>
        </div>
    )
}

const styles = {
    contenedor: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f6f6f6',
        padding: 10,
        borderRadius: 10
    },
    img: {
        width: 75,
        height: 75,
    },
    delete: {
        border: 'none',
        color: 'red',
        cursor: 'pointer',
        fontSize: 17,
    }
}

export default ItemCart;