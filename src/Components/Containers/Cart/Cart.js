import React, { useContext } from 'react';

import { Context } from '../../../CustomContext';
import { Link } from 'react-router-dom';

import ItemCart from './ItemCart';
import CartEmpty from './CartEmpty';

import { styles } from './Cart.Style'


export const Cart = () => {
    const { cart, total } = useContext(Context);

    return (
        <div style={styles.container}>
            {cart.length === 0 ?
                <CartEmpty/>                :
                <>
                    {cart.map((producto) => {
                        return <ItemCart style={styles.itemCart} key={producto.id} producto={producto} />
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