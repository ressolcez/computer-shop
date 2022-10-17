import React from 'react';
import "./CartOrderComponent.css";
import styled from "styled-components";
import Button from '@mui/material/Button';

const SummaryTitle = styled.h1`
  font-weight: 200;
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

function CartOrderComponent() {
  return (
    <div className='cart__items__order__wrapper'>
        <div className='cart__items__wrapper'>
            <div className='single__item__wrapper'>
                <div className = 'item__image__description'>
                    <div className='item__image'>
                        <img className='image__cart__product' src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>

                    </div>
                    <div className='item__description'>
                        <p className='name__style'><b>Nazwa: </b> XIAOMII </p>
                        <p><b>Kategoria: </b> XIAOMII </p>
                        <p><b>Producent: </b> XIAOMII </p>
                    </div>
                </div>
                <div className='item__control__price'>
                    <div className='control'>
                        <div>
                        <Button className='buttonControl' variant="contained" >+</Button> 0 <Button className='buttonControl' variant="contained">-</Button>
                        </div>
                    </div>
                    <div className='price'>
                        PLN 200
                    </div>
                </div>
            </div>            
        </div>
        <div className='cart__order__wrapper'>
            
        <SummaryTitle>Podsumowanie koszyka</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
        </div>
    </div>
  )
}

export default CartOrderComponent