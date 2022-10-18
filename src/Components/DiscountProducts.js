import React from 'react'
import "./DiscountProducts.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import computer from "../Images/komputer2.jpg"
import {Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
    text-decoration: none;
  }
`

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
            <div className='carousel__item' key={product.id}>
                <div className='carousel__item__img__cont'>
                <StyledLink to={"/"+product.categoryModel.name+"/"+product.id}>
                    <img src={computer} alt = "komputer"/>
                </StyledLink>
                </div>
                <div className='carousel__desc'>
                    <div className='carousel__desc__title'>
                        <p>{product.name}</p>
                        {product.price} PLN
                          
                        <div>
                        {product.price} PLN
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