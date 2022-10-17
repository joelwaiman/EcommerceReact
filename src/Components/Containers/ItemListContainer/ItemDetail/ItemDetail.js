import React from "react";

const Item = ({ product }) => {
  return (
      <div>
        <img alt={product.title} src={product.image} />
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
      </div>
  );
};

export default Item;