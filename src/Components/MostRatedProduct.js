import React, {useState, useEffect} from 'react'
import "./MostRatedProduct.css"
import Rating from "@mui/material/Rating";
import computer from "../Images/komputer8.jpg"
import {Link } from "react-router-dom";
import styled from "styled-components";
import {useCart} from "react-use-cart";
import OpinionsService from '../Services/OpinionsService';
import Button from '@mui/material/Button';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

const StyledLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
    text-decoration: none;
  }
`

function MostRatedProduct({product}) {

    const [opinions ,setOpinions] = useState([]);
    const { addItem } = useCart();
    
    useEffect(() => {
      OpinionsService.getAllOpinionToProduct(product.id).then((response) => {
        setOpinions(response.data);
      });
       }, []);


    const handleRating = () => {

        var rating = 0;
        var liczba_ocen = opinions.length;
        
          for(var i=0; i< liczba_ocen ; i++) 
          {
            rating += opinions[i].rate;
          }
    
          var finalSum = rating/liczba_ocen;
          finalSum = finalSum.toFixed(1);
    
          
          if(liczba_ocen === 0 ){
            finalSum = 0;
          }
    
          return(
            <Rating value={parseFloat(finalSum)} readOnly precision={0.5} size="small"/>
          );
}

  return (
    <div className='MostRatedProduct__wrapper' >
    <StyledLink to={"/"+product.categoryModel.name+"/"+product.id} >
    <div className='img__container__rated'>
      <img src ={computer} alt ="computer" ></img>
    </div>
    </StyledLink>
    <div className='title__container__rated'>{product.name}</div>
    <div className='stars__container'> 
    {handleRating()}
     </div>
    <div className='price__btn__container__rated'>
      <div className='price__container__rated'>{product.price} PLN</div>
      <div className='btn__container__rated'>
      <Button variant="contained" style = {{paddingTop: '2px', paddingBottom:'2px'}} color="success">
        <AddShoppingCart style ={{width:'20px'}} />
      </Button>
      </div>
    </div>
  </div>
  )
}

export default MostRatedProduct