import React, { useContext } from 'react';
import { Context } from '../../../CustomContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { styles } from './Cart.Style'


export const Cart = () => {
    const { cart, total } = useContext(Context);

    return (
        <div style={styles.container}>
            {cart.length === 0 ?
                <h2 style={styles.text}>
                    Aun no agregaste productos al carrito, puedes ir a <Link to="/">aqui</Link>
                </h2>
                :
                <>
                    {cart.map((producto) => {
                        return <ItemCart key={producto.id} producto={producto} />
                    })}

                    <h4 style={styles.total}>Total:${total}</h4>
                    <Link to="/Formulario">
                        <button style={styles.button}>
                            Finalizar Compra
                        </button>
                    </Link>
                </>
            }
        </div>
    )
}