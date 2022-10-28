import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { style } from "./CartWidget.style";
import { Context } from "../../CustomContext";

export const CartWidget = () => {
    const { qty } = useContext(Context)

    return (
        <>
            <p>{qty}</p>
                <ShoppingCartIcon style={style.i} />
            
        </>

    )
}