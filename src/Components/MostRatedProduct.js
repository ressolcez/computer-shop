import React, {useState, useEffect} from 'react'
import "./MostRatedProduct.css"
import Rating from "@mui/material/Rating";
import computer from "../Images/komputer2.jpg"
import HomePageServices from '../Services/HomePageServices';
import {json, Link } from "react-router-dom";
import styled from "styled-components";
import {useCart} from "react-use-cart";

const StyledLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
    text-decoration: none;
  }
`

function MostRatedProduct({product}) {

    const [opinions ,setOpinions] = useState([])
    const { addItem } = useCart();


    useEffect(() => {
            HomePageServices.getOpinionsToProduct(product.id).then((responseOpinion) => {
                setOpinions(responseOpinion.data);
              });
       }, [product.productId]);


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
    <div className='img__container'>
      <img src ={computer} alt ="computer" ></img>
    </div>
    </StyledLink>
    <div className='title__container'>{product.name}</div>
    <div className='stars__container'> 
    {handleRating()}
     </div>
    <div className='price__btn__container'>
      <div className='price__container'>{product.price} PLN</div>
      <div className='btn__container'>
      <button type="button" className="btn btn-success btn-sm" onClick={() => addItem({"id": 1, "price": 23})}> <i className="bi bi-cart"></i>Success</button>
      </div>
    </div>
  </div>
  )
}

export default MostRatedProduct