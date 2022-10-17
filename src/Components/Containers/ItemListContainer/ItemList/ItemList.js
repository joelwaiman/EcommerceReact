import React from "react";
import Item from "../ItemDetail/ItemDetail";

const ItemList = ({products}) => {
    return(
        <div style={styles.container}>
        {products.map((product) =>
            <Item style={styles.card} key={product.id} product={product} />
        )}
    </div>
        );
}

const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    },
    card:{
        width: 190,
        height: 254,
        borderRadius: 30,
        background: '#e0e0e0',
        boxshadow: '15px 15px 30px #bebebe -15px -15px 30px #ffffff'},
  }

export default ItemList;