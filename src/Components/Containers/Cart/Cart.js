import React, { useContext } from 'react';

import { Context } from '../../../CustomContext';
import { Link } from 'react-router-dom';

import ItemCart from './ItemCart';
import CartEmpty from './CartEmpty';

import styles from './Cart.module.css'


export const Cart = () => {
    const { cart, total } = useContext(Context);

    return (
        <div className={styles.container}>
            {cart.length === 0 ?
                <CartEmpty /> :
                <>
                    {cart.map((producto) => {
                        return <ItemCart key={producto.id} producto={producto} />
                    })}

                    <h4 className={styles.total}>Total:${total}</h4>
                    <Link to="/Formulario">
                        <button className={styles.button}>
                            Finalizar Compra
                        </button>
                    </Link>
                </>
            }
        </div>
    )
}