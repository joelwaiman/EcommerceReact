import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { style } from "./CartWidget.style";
import { Context } from "../../CustomContext";

export const CartWidget = () => {
    const { qty } = useContext(Context)

    return (
        <>
            {qty === 0 ?
            <ShoppingCartIcon style={style.i} />
            :
            <div style={style.cart}>
            <ShoppingCartIcon style={style.i} />
                <p style={style.count}><b>{qty}</b></p>
            </div>
}
        </>

    )
}