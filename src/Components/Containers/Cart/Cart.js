import React, { useContext } from 'react';
import { Context } from '../../../CustomContext';
import { Link } from 'react-router-dom';


export const Cart = () => {
    const { cart } = useContext(Context);
    return (
        <>
            {cart.length === 0 ?
                <h2>
                    Aun no agregaste productos al carrito, puedes ir a <Link to="/">aqui</Link>
                </h2>
                :
                <>
                    {cart.map((product) => {
                        <h2 key={product.id}>product.title</h2>
                    })}
                </>
            }
        </>
    )
}