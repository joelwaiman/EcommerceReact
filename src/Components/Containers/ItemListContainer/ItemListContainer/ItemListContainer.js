import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { idCategory } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${idCategory}`

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(idCategory? URL_CAT : URL_BASE);
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
    }, [idCategory])

    return (
        <>
            {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
        </>
    );
};
    

export default ItemListContainer