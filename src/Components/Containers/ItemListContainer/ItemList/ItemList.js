import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div style={styles.container}>
      {products.map((product) => {
            return <Item key={product.id} product={product}/>;
        })}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    maxWidth: '70%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10
  }

}

export default ItemList;