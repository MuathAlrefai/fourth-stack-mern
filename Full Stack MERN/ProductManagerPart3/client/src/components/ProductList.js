import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = (props) => {
  const { removeFromDom } = props;

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        removeFromDom(productId);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1>All Products:</h1>
      {props.products.map((product, i) => (
        <p key={i}>
          <Link to={"http://localhost:3000/products/" + `${product._id}`}>
            {product.title}
          </Link>
          <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default ProductList;
