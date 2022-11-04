import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../../../firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { idCategory } = useParams();

  const allProducts = collection(db, 'productos');
  const categoryProducts = idCategory? query(allProducts, where('category', '==', idCategory)) : allProducts
  

  useEffect(() => {
    const getProducts = async () => {
      try{
        const result = await getDocs(categoryProducts);
        const listProducts = result.docs.map(doc => doc.data());
        setProducts(listProducts);
        }catch{
          console.log("error");
        }
        finally{
          setLoading(false)
        }
    };
    getProducts()
    },[idCategory])


    return (
        <div style={styles.background}>
            {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
        </div>
    );
};
    

export default ItemListContainer

const styles ={
  background: {
    backgroundColor: '#DDDDDD',
    maxHeight: '100%'
  }
}