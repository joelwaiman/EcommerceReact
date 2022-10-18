import React from "react";
import {styles} from "./ItemDetail.style"
// import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({ product, onAdd }) => {
  return (
    <div style={styles.card}>
      <img style={styles.img} alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h2>${product.price}</h2>
      {/* <ItemCount stock={10} initial={1} onAdd={onAdd()}/> */}
    </div>
  );
};

export default ItemDetail