import React from 'react'
import "./MostOrderProducts.css";
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
function MostOrderProducts({products}) {
  return (
    <div className= "MostOrderProducts__wrappper">
       {products.map((product)=>(
            <div className='MostOrderProduct__wrapper' key={product.id}>
             <StyledLink to={"/"+product.categoryModel.name+"/"+product.id}>
                <div className='img__container'>
                  <img src ={Komputer} alt = "productImage"></img>
                </div>
            </StyledLink>
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