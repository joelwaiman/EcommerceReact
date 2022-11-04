import React from "react";
import Logo from "../../Assets/Logo.png";
import { style } from "./Header.style"
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const categorias = [
    { nombre: "Sneakers", id: 0, ruta: "/categoria/Sneakers" },
    { nombre: "Buzos", id: 1, ruta: "/categoria/Buzos" },
    { nombre: "Accesorios", id: 2, ruta: "/categoria/Accesorios" },
  ];

    return (
        <header style={style.container}>
            <Link to="/">
                <img style={style.img} src={Logo} alt="Logo Tienda" />
            </Link>
            
            <nav>
                {categorias.map((categoria) => {
                    return <NavLink
                     key={categoria.id}
                     style={style.categorias}
                     to={categoria.ruta}
                     >
                        {categoria.nombre}
                        </NavLink>
                })}</nav>
                <Link to="/cart">
                    <CartWidget/>
                </Link>
                
        </header>
    )
}

export default Header