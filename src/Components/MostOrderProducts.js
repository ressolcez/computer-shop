import React from 'react'
import "./MostOrderProducts.css";
import MostOrderProduct from "./MostOrderProduct"
import Komputer from "../Images/komputer2.jpg"

function MostOrderProducts({products}) {
  return (
    <div className= "MostOrderProducts__wrappper">
       {products.map((product)=>(
            <div className='MostOrderProduct__wrapper' key={product.productId}>
            <div className='img__container'>
              <img src ={Komputer} ></img>
            </div>
            <div className='title__container'>Sluchawki hehe</div>
            <div className='price__btn__container'>
              <div className='price__container'>asd</div>
              <div className='btn__container'>asd</div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default MostOrderProducts