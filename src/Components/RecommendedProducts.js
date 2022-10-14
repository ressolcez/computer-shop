import React, {useState, useEffect} from 'react'
import "./RecommendedProducts.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from "@mui/material/Rating";
import computer from "../Images/komputer2.jpg"
import HomePageServices from '../Services/HomePageServices';
import RecommendedProduct from './RecommendedProduct';

function RecommendedProducts({products}) {

  return (
    <div className='RecommendedProducts__wrappper'>
       {products.map((product)=>(
          <RecommendedProduct key={product.productId} product = {product}/>
      ))}
    </div>
  )
}

export default RecommendedProducts