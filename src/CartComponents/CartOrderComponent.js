import React,{useEffect} from 'react';
import "./CartOrderComponent.css";
import styled from "styled-components";
import Button from '@mui/material/Button';
import {useCart} from "react-use-cart";
import SingleCartItem from './SingleCartItem';
import OrderServices from '../Services/OrderServices';


const SummaryTitle = styled.h1`font-weight: 200;`;

const SummaryItem = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

function CartOrderComponent() {

  const { items,cartTotal,totalItems  } = useCart();

  const handleAddOrder = () =>{

    OrderServices.addOrder(1,cartTotal).then((response) => {
      
      items.map((product)=>(
        OrderServices.addOrderProduct(response.data,product.id, product.quantity)
      ))
    
    });
  }

  return (
    <div className='cart__items__order__wrapper'>
        <div className='cart__items__wrapper'>
        {items.map((product)=>(
          <SingleCartItem product = {product}/>
        ))}
        </div>
        <div className='cart__order__wrapper'>

        <SummaryTitle>Podsumowanie koszyka</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Ilość przedmiotów w koszyku</SummaryItemText>
              <SummaryItemPrice>{totalItems}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Cena</SummaryItemText>
              <SummaryItemPrice>{cartTotal} PLN</SummaryItemPrice>
            </SummaryItem>
            <Button style = {{margin:'15px'}} variant = "contained" onClick={()=> handleAddOrder()} > Zamów</Button>
        </div>
    </div>
  )
}

export default CartOrderComponent