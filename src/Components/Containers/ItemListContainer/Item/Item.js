import React from "react";
import { styles } from "./Item.style"
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div style={styles.card}>
      <img style={styles.img} alt={product.title} src={product.image} />
      <div style={styles.text}>
        <p style={styles.title}>{product.title}</p>
        <p style={styles.price}>${product.price}</p>
      </div>
      <Link to={`/producto/${product.id}`}>
        <button style={styles.button}>
          Ver detalles
        </button>
      </Link>
    </div>
  );
};

export default Item;