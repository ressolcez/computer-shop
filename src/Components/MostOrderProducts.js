import React from 'react';
import MostOrderProduct from './MostOrderProduct';
import "./MostOrderProducts.css";

function MostOrderProducts({products}) {
  return (
    <div className= "MostOrderProducts__wrappper">
       {products.map((product)=>(
          <MostOrderProduct  key={product.id} product = {product}/>
        ))}
    </div>
  )
}

export default MostOrderProducts