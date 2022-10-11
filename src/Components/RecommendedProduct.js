import React from 'react'
import computer from "../Images/komputer2.jpg"
import "./RecommendedProduct.css"


function RecommendedProduct() {
  return (
    <div className='RecommendedProduct__wrapper' >
      <div className='img__container'>
        <img src ={computer} alt ="computer" ></img>
      </div>
      <div className='title__container'>Sluchawki hehe</div>
      <div className='stars__container'>1/5</div>
      <div className='price__btn__container'>
        <div className='price__container'>2137zł</div>
        <div className='btn__container'>Click</div>
      </div>
    </div>
  )
}

export default RecommendedProduct