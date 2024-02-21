import React from "react";
import styles from "./Item.module.css"
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <>
      <Link to={`/producto/${product.id}`} className={styles.link}>
        <div className={styles.card}>
          <img className={styles.img} 
          alt={product.title} 
          src={product.image}
          />
          <div className={styles.text}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;