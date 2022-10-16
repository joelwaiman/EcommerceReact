import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemList = ({products}) => {
    return(
        <div>
        {products.map((product) =>
            <ItemDetail key={product.id} product={product} />
        )}
    </div>
        );
}

export default ItemList;