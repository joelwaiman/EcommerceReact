import React, { useState } from "react";
import Item from "../Item/Item";
import styles from "./ItemList.module.css"

const ItemList = ({ products }) => {

  const [filter, setFilter] = useState('')

  const sortedProducts = () => {
    switch (filter) {
      case 'low':
        return products.slice().sort((a, b) => a.price - b.price);
      case 'high':
        return products.slice().sort((a, b) => b.price - a.price);
      default:
        return products
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.selectContainer}>
        <select
          className={styles.select}
          onChange={(e) => setFilter(e.target.value)}>
          <option className={styles.option} value="">El mas reciente</option>
          <option className={styles.option} value='low'>Precio mas barato</option>
          <option className={styles.option} value='high'>Precio mas alto</option>
        </select>
      </div>

      <div className={styles.containerProducts}>
        {sortedProducts().map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default ItemList;