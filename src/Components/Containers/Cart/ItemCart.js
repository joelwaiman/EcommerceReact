import React, {useContext} from "react";
import { Context } from "../../../CustomContext";

const ItemCart = ({producto}) => {
    const {deleteItem} = useContext(Context)
    return(
        <div style={styles.contenedor}>
            <img style={styles.img} src={producto.image} alt={producto.title} />
            <h4 key={producto.id}>{producto.title}</h4>
            <p>Cantidad: {producto.cantidad}</p>
            <p>${producto.price * producto.cantidad}</p>
            <button onClick={()=>deleteItem(producto.id)}>Borrar</button>
         </div>
         )}

const styles = {
    contenedor:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 950,
        margin: 'auto',
        marginTop: 35,
        backgroundColor: '#f6f6f6',
        padding: 10,
        borderRadius: 10
    },
    img:{
        width: 75,
        height: 75,
    },
}

export default ItemCart;