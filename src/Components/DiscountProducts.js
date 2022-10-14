import React from 'react'
import "./DiscountProducts.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import computer from "../Images/komputer2.jpg"


function DiscountProducts({products}) {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 780 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 780, min: 470 },
          items: 2
        },
        minMobile: {
            breakpoint: { max: 470, min: 0 },
            items: 1
          }
      }

  return (
    <div className='DiscountProducts__wrappper'>
        <Carousel responsive={responsive}>
        {products.map((product)=>(
            <div className='carousel__item' key={product.productId}>
                <div className='carousel__item__img__cont'>
                    <img src={computer} alt = "komputer"/>
                </div>
                <div className='carousel__desc'>
                    <div className='carousel__desc__title'>
                        <p>Title</p>
                        <text>price</text>
                        <div>
                        <text>price2</text>
                        </div>
                    </div>
                </div>
            </div>
             ))}
        </Carousel>
        </div>
        )
}



export default DiscountProducts