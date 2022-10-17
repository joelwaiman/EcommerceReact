import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const {idProducts} = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${idProducts}`)
        const data = await res.json();
        setProduct(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [idProducts]);

  return (
    <>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};