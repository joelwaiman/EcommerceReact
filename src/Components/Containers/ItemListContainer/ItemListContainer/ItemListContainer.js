import ItemList from "../ItemList/ItemList";
import Spinner from "../../../Spinner/spinner"

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../../../firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  useEffect(() => {
    const allProducts = collection(db, 'productos');
    const categoryProducts = idCategory ? query(allProducts, where('category', '==', idCategory)) : allProducts

    const getProducts = async () => {
      try {
        const result = await getDocs(categoryProducts);
        const listProducts = result.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          }
        });
        setProducts(listProducts);
      } catch {
        console.log("error");
      }
      finally {
        setLoading(false)
      }
    };
    getProducts()
  }, [idCategory])


  return (
    <div style={styles.background}>
      {<>{loading ?
        <Spinner/>
        :
        <ItemList products={products} />}</>}
    </div>
  );
};


export default ItemListContainer

const styles = {
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    maxHeight: '100%'
  }
}