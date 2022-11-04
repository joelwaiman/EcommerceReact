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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 50
  }

}

export default ItemList;