import React from 'react'
import "./RecommendedProducts.css"
import 'bootstrap/dist/css/bootstrap.min.css';
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