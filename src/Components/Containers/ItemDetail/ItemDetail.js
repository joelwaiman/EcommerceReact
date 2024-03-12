import React, { useContext } from "react";
import styles from "./ItemDetail.module.css"
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../../CustomContext";
import toast, { Toaster } from "react-hot-toast";

const ItemDetail = ({ product }) => {

  const { addItem } = useContext(Context);

  const onAdd = (contador) => {
    addItem(product, contador)
    toast.success('Se agrego al carrito')
  }

  return (
    <section className={styles.card}>

      <Toaster/>

      <img className={styles.img} alt={product.title} src={product.image} />

      <div className={styles.infoContainer}>
        <p className={styles.title}>{product.title}</p>
        <span className={styles.text}>{product.description}</span>
        <p className={styles.price}>${product.price}</p>

        <div className={styles.buttonContainer}>
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          <Link to="/cart">
            <button className={styles.button}>Ir al carrito</button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ItemDetail