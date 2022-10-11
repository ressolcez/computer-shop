import React from 'react'
import "./MostOrderProduct.css"
import Komputer from "../Images/komputer2.jpg"

function MostOrderProduct() {
  return (
    <div className='MostOrderProduct__wrapper' >
      <div className='img__container'>
        <img src ={Komputer} ></img>
      </div>
      <div className='title__container'>Sluchawki hehe</div>
      <div className='price__btn__container'>
        <div className='price__container'>asd</div>
        <div className='btn__container'>asd</div>
      </div>
    </div>
  )
}

export default MostOrderProduct