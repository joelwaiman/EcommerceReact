import React from "react";
import {styles} from "./ItemDetail.style"

const ItemDetail = ({ product }) => {
  return (
    <div style={styles.card}>
      <img style={styles.img} alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h2>${product.price}</h2>
    </div>
  );
};

export default ItemDetail