import React from "react";
import Logo from "../../Assets/Logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo Tienda" />
            <nav>
                <a href="">Zapatillas</a>
                <a href="">Buzos</a>
                <a href="">Remeras</a>
                <a href="">Accesorios</a>
            </nav>
            <button>
                <ShoppingCartIcon/>
            </button>
        </header>
    )
}

export default Header