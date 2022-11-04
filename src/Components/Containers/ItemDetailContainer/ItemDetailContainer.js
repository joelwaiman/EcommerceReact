import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore"
import { db } from "../../../firebase/firebase";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const allProducts = collection(db, "productos")
  const productDetail = doc (allProducts, id)


  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await getDoc(productDetail);
        const item = await result.json();
        setProduct(item)
      } catch {
        console.log("error");
      }
      finally {
        setLoading(false)
      }
    }; getProducts()
  }, [id])


  return (
    <>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};