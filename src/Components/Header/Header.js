import React from "react";
import Logo from "../../Assets/Logo.png";
import { style } from "./Header.style"
import { CartWidget } from "../CartWidget/CartWidget";

const Header = () => {

    const categorias = [
        { nombre: "Categoria 1", id: 0, ruta: "" },
        { nombre: "Categoria 2", id: 1, ruta: "" },
        { nombre: "Categoria 3", id: 2, ruta: "" },
    ]

    return (
        <header style={style.container}>
            <img style={style.img} src={Logo} alt="Logo Tienda" />
            <nav>
                {categorias.map((categoria) => {
                    return <a key={categoria.id} style={style.categorias} href={categoria.ruta}>{categoria.nombre}</a>
                })}</nav>
                <CartWidget/>
        </header>
    )
}

export default Header