import React from 'react'
import "./RecommendedProducts.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import computer from "../Images/komputer2.jpg"
import {Link } from "react-router-dom";
import styled from "styled-components";
import Button from '@mui/material/Button';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import StyledLink from '../SharedComponent/StyledLink';

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
                        <div className='carousel__desc__price__btn'>
                          <div className='carousel__desc__price'>
                            {product.price} PLN
                          </div>
                          <div className='carousel__desc__btn'>
                          <Button variant="contained" style = {{paddingTop: '2px', paddingBottom:'2px'}} color="success">
                            <AddShoppingCart style ={{width:'20px'}} />
                          </Button>
                          </div>
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