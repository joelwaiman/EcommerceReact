import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore"
import { db } from "../../../firebase/firebase";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "productos");
    const product = doc(productCollection, id);

    const getProducts = async () => {
      try{
        const item = await getDoc(product)
        setProduct({
          ...item.data(),
          id:item.id,
        })
      } catch{
        console.log("error");
      }
      finally{
        setLoading(false)
      }
    }; getProducts()
  }, [id]);


  return (
    <>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};