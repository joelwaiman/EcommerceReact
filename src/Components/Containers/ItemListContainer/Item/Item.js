import React from "react";
import {styles} from "./Item.style"
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div style={styles.card}>
      <img style={styles.img} alt={product.title} src={product.image} />
      <h1 style={styles.title}>{product.title}</h1>
      <h2 style={styles.text}>${product.price}</h2>
      <Link to={`/producto/${product.id}`}>
        <button style={styles.button}>
          Ver detalles
        </button>
      </Link>
    </div>
  );
};

export default Item;