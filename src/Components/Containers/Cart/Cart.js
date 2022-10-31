import React, { useContext } from 'react';
import { Context } from '../../../CustomContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';


export const Cart = () => {
    const { cart, total } = useContext(Context);

    
    return (
        <>
            {cart.length === 0 ?
                <h2>
                    Aun no agregaste productos al carrito, puedes ir a <Link to="/">aqui</Link>
                </h2>
                :
                <>
                    {cart.map((producto) => {
                        return <ItemCart key={producto.id} producto = {producto}/>
                        
                    })}
                </>
            }
            <h4 style={styles.total}>Total:${total}</h4>
        </>
    )
}

const styles = {
    total:{
        maxWidth: 950,
        margin: 'auto',
        textAlign: 'right'
    }
}