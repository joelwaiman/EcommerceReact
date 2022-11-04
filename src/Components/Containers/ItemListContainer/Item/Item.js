import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    console.log(product.id);
  return (
    <div style={styles.card}>
      <img style={styles.img} alt={product.title} src={product.image} />
      <h1 style={styles.title}>{product.title}</h1>
      <h2 style={styles.text}>${product.price}</h2>
      <Link to={`/producto/ ${product.id}`}>
        <button>
          Ver detalles
        </button>
      </Link>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: 250,
    height: 450,
    borderRadius: 30,
    background: 'white',
    boxshadow: '15px 15px 30px #bebebe -15px -15px 30px #ffffff'
  },
  img: {
    maxHeight: '50%',
    maxWidth: '50%',
  },
  title: {
    fontSize: '100%'
  },
  text: {
    fontSize: '100%',
  }
}

export default Item;