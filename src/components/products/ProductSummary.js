import React,{Component} from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom'
const ProductSummary=({product})=>{
  
    console.log(product)
    return(
        <div className="container my-3  ">
        <div className="card" style={{width: '18rem'}}>
        <img src={product.file} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {product.product_name}</h5>
          <p className="card-text">Category   :  {product.category}</p>
          <p className="card-text"> Brand   :  {product.brand}</p>
          <p className="card-text">Price  :   {product.price}</p>
          <Link to={"/product/" + product.id}style={{ color: 'inherit', textDecoration: 'inherit'}}  key={product.id}>
            Description
              </Link>
        </div>
      </div>
         </div>
    )}

export default ProductSummary