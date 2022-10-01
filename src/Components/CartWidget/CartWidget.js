import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { style } from "./CartWidget.style";

export const CartWidget = () => {

    return (
    < button style = { style.btn } >
        <ShoppingCartIcon style = { style.i }/>
    </button >
    )}