import React, {useState, useContext} from "react";
import {styles} from "./ItemDetail.style"
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../../CustomContext";

const ItemDetail = ({ product}) => {
  const [showItemCount, setshowItemCount] = useState(false)
  const {addItem} = useContext(Context);

  const onAdd = (contador)=> {
    addItem(product, contador)
    setshowItemCount(true);
  }

  return (
    <div style={styles.card}>
      <img style={styles.img} alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h2>${product.price}</h2>
      {!showItemCount? (
      <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
      ) : <Link to = "/cart">
        <button>Finalizar Compra</button>
      </Link> }
    </div>
  );
};

export default ItemDetail