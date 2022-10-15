import React from "react";
import Logo from "../../Assets/Logo.png";
import { style } from "./Header.style"
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const Header = () => {

    const categorias = [
        { nombre: "Electronics", id: 0, ruta: "/categoria/Electronics" },
        { nombre: "Jewelery", id: 1, ruta: "/categoria/Jewelery" },
        { nombre: "Men's clothing", id: 2, ruta: "/categoria/Men's clothing" },
        { nombre: "Women's clothing", id: 3, ruta: "/categoria/Women's clothing" },
    ]

    return (
        <header style={style.container}>
            <Link to="/">
                <img style={style.img} src={Logo} alt="Logo Tienda" />
            </Link>
            
            <nav>
                {categorias.map((categoria) => {
                    return <Link key={categoria.id} style={style.categorias} to={categoria.ruta}>{categoria.nombre}</Link>
                })}</nav>
                <Link to="/cart">
                    <CartWidget/>
                </Link>
                
        </header>
    )
}

export default Header