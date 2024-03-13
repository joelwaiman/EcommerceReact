import React from "react";
import Logo from "../../Assets/Logo.png";
import styles from "./Header.module.css"
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    const categorias = [
        { nombre: "SNEAKERS", id: 0, ruta: "/categoria/Sneakers" },
        { nombre: "BUZOS", id: 1, ruta: "/categoria/Buzos" },
        { nombre: "ACCESORIOS", id: 2, ruta: "/categoria/Accesorios" },
    ];

    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <Link to="/">
                    <img className={styles.img} src={Logo} alt="Logo Tienda" />
                </Link>

                <nav className={styles.nav}>
                    {categorias.map((categoria) => {
                        return <NavLink
                            key={categoria.id}
                            to={categoria.ruta}
                            className={location.pathname === categoria.ruta ? styles.active : styles.categorias}
                        >
                            {categoria.nombre}
                        </NavLink>
                    })}
                    <Link to="/cart" className={styles.countMobile}>
                        <CartWidget />
                    </Link>
                </nav>
                <Link to="/cart" className={styles.count}>
                    <CartWidget />
                </Link>
            </div>
        </header>
    )
}

export default Header;