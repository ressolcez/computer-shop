import React,{useState} from 'react';
import {useCart} from "react-use-cart";
import styled from "styled-components";
import Button from '@mui/material/Button';
import SingleCartItem from './SingleCartItem';
import CartModalFail from '../SharedComponent/CartModalFail';
import StyledDivider from "../SharedComponent/StyledDivider";
import { useNavigate } from "react-router-dom";

import "./CartOrderComponent.css";


const SummaryTitle = styled.h1`
  font-weight: 200;
  display: flex;
  justify-content: center;

`;

const SummaryItem = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

function CartOrderComponent({user}) {

  const navigate = useNavigate();

  const { items,cartTotal,totalItems  } = useCart();

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);


  return (
    <>
    {items.length !== 0 ? (
      <div className='cart__items__order__wrapper'>
          <div className='cart__items__wrapper'>
          <div className='cart__heading'>
            <h2>Twój koszyk</h2>
           </div>  
          {items.map((product)=>(
            <SingleCartItem product = {product}/>
          ))}
          </div>
          <div className='cart__order__wrapper'>

          <SummaryTitle>Podsumowanie</SummaryTitle>
          <StyledDivider/>
              <SummaryItem>
                <SummaryItemText>Ilość przedmiotów</SummaryItemText>
                <SummaryItemPrice>{totalItems}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Dostawa</SummaryItemText>
                <SummaryItemPrice>Gratis</SummaryItemPrice>
              </SummaryItem>
              <StyledDivider/>
              <SummaryItem type="total">
                <SummaryItemText>Cena</SummaryItemText>
                <SummaryItemPrice>{cartTotal} PLN</SummaryItemPrice>
              </SummaryItem>
              {!user ? (
              <Button style = {{margin:'15px'}} variant = "contained" onClick={()=> setOpenModal(true)}> Zamów</Button>
              ) : (
                <Button style = {{margin:'15px'}} variant = "contained"  onClick={()=>  navigate("/Order")}> Przejdź do płatności</Button>
              )}
          </div>
          <CartModalFail openModal = {openModal} handleCloseModal = {handleCloseModal}/>
      </div>
    ):(
      <div className='cart__no__content'> 
        <p> Brak przedmiotów w koszyku</p>
      </div>
    )
    }
  </>
  )
}

export default CartOrderComponent