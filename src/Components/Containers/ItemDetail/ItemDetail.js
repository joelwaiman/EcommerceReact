import React, { useState, useContext } from "react";
import { styles } from "./ItemDetail.style"
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
    <div style={styles.card}>
      <img style={styles.img} alt={product.title} src={product.image} />
      <div style={styles.infoContainer}>
        <h1 style={styles.title}>{product.title}</h1>
        <h3>${product.price}</h3>
        <span style={styles.text}>{product.description}</span>
        {!showItemCount ? (
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        ) : <Link to="/cart">
          <button style={styles.button}>Finalizar Compra</button>
        </Link>}
      </div>
    </div>
  );
};

export default ItemDetail