import React from 'react'
import "./MostOrderProducts.css";
import Komputer from "../Images/komputer2.jpg"
import {Link } from "react-router-dom";
import styled from "styled-components";
import Button from '@mui/material/Button';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

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
            <div className='title__container'>{product.name}</div>
            <div className='price__btn__container__order'>
              <div className='price__container__order'>{product.price} PLN</div>
              <div className='btn__container'>
              <Button variant="contained" style = {{paddingTop: '2px', paddingBottom:'2px'}} color="success">
                <AddShoppingCart style ={{width:'20px'}} />
              </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default MostOrderProducts