import React, { useState, useContext } from "react";
import styles from "./ItemDetail.module.css"
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../../CustomContext";

const ItemDetail = ({ product }) => {

  const [showItemCount, setshowItemCount] = useState(false)
  const { addItem } = useContext(Context);

  const onAdd = (contador) => {
    addItem(product, contador)
    setshowItemCount(true);
  }

  return (
    <section className={styles.card}>
      <img className={styles.img} alt={product.title} src={product.image} />
      <div className={styles.infoContainer}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>${product.price}</p>
        <span className={styles.text}>{product.description}</span>
        <div className={styles.buttonContainer}>
          {!showItemCount ? (
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          ) : <Link to="/cart">
            <button className={styles.button}>Finalizar Compra</button>
          </Link>}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail