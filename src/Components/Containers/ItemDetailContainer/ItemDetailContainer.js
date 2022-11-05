import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore"
import { db } from "../../../firebase/firebase";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idProduct } = useParams();

  useEffect(() => {
    const allProducts = collection(db, "productos")
    const productDetail = doc (allProducts, idProduct)

    const getProducts = async () => {
      try {
        const result = await getDoc(productDetail);
        const item = await result.json()
        setProduct({
          id: item.id,
          ...item.data(),
        })
      } catch {
        console.log("error");
      }
      finally {
        setLoading(false)
      }
    }; getProducts()
  }, [idProduct])


  return (
    <>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};