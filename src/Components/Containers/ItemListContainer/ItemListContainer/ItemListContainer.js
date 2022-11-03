import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../../../firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { idCategory } = useParams();



  const productsCollection = collection(db, 'productos')

  useEffect(() => {
    const getProducts = async () => {
      try{
        const result = await getDocs(productsCollection);
        const listProducts = await result.json();
        setProducts(data);
        }catch{
          console.log("error");
        }
        finally{
          setLoading(false)
        }
    };
    getProducts()
    
    









    // /const getProducts = async () => {
    //   try {
    //     const res = await fetch(idCategory? URL_CAT : URL_BASE);
    //     const data = await res.json();
    //     setProducts(data);
    //   } catch {
    //     console.log("error");
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // getProducts();
    },)

    return (
        <>
            {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
        </>
    );
};
    

export default ItemListContainer