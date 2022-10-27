import React, {useState, useContext} from "react";
import {styles} from "./ItemDetail.style"
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../../CustomContext";

const ItemDetail = ({ product}) => {
  const [showItemCount, setshowItemCount] = useState(false)
  const resultado = useContext(Context)
  console.log(resultado);

  const onAdd = (contador)=> {
    console.log("se agregan " + contador + " unidades");
    setshowItemCount(true);
  }

  return (
    <div style={styles.card}>
      <img style={styles.img} alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h2>${product.price}</h2>
      {!showItemCount? (
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      ) : <Link to = "/cart">
        <button>Finalizar Compra</button>
      </Link> }
    </div>
  );
};

export default ItemDetail