import React from "react";
import {style} from "./ItemDetail.style"

const ItemDetail = ({ product }) => {
  return (
    <div style={style.card}>
      <img style={style.img} alt={product.title} src={product.image} />
      <h1 style={style.title}>{product.title}</h1>
      <span>{product.description}</span>
      <h2>{product.price}</h2>
    </div>
  );
};

export default ItemDetail