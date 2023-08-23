import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = (props) => {

    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map( (product, i) =>
                <p key={i}><Link to={"http://localhost:3000/products/" + `${product._id}`}>{product.title}</Link></p>
            )}
        </div>
    )
}
    
export default ProductList;

