import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css"
import Komputer from "../Images/komputer2.jpg"
import {Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
    text-decoration: none;
  }
`

function Slider({products}) {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <Carousel responsive={responsive}>
         {products.map((product)=>(
        <div key={product.productId} className='carousel__wrappper'>
            <div className='carousel__wrappper__image'>
            <StyledLink to={"/"+product.categoryModel.category_id+"/"+product.productId}>
                <img className='inside__img' src = {Komputer} alt = "computer"/>
             </StyledLink>
            </div>
            <div className='carousel__wrapper__description'>
                <div className='carousel__wrapper__title'>
                    {product.productName}
                </div>
                <div>
                    {product.short_Description}
                </div>
            </div>
        </div>
        ))}
</Carousel>
  )
}

export default Slider