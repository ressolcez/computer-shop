import React from 'react';
import computer from "../Images/komputer2.jpg";
import StyledDivider from "../SharedComponent/StyledDivider";
import "./UserRecentOrderComponent.css";

function UserRecentOrderComponent({user}) {

  return (
    <div className='userRecentOrderComponent__wrapper'>
        <div className='single__order__wrappper'>
          <div className='order__title'>
            <p className='order__info'>Id zamówienia: 2</p>
            <p className='order__info'>Status: Zrealizowane</p>
            <p className='order__info'>Data: </p>
            <p className='order__info'>Łączna kwota zamówienia: 2137 PLN</p> 
            <div style ={{width:'100%'}}>
                 <StyledDivider/>
            </div>
          </div>
          <div className='products__inorder__wrapper'>
            <div className='single__productInOrder__wrappper'>
                <div className='single__product__image'>
                  <img src = {computer} alt = "komputer img"/>
                </div>
                <div className='single__product__name'>
                  <b>Nazwa:</b>
                  Acer H5 X 24
                </div>
                <div className='single__product__quantity'>
                  <b>Ilość:</b>
                  25
                </div>
                <div className='single__product__price'>
                  <b>Cena:</b>
                  35
                </div>
                <div style ={{width:'100%'}}>
                 <StyledDivider/>
                </div>
            </div>  
            <div className='single__productInOrder__wrappper'>
                <div className='single__product__image'>
                  <img src = {computer} alt = "komputer img"/>
                </div>
                <div className='single__product__name'>
                  <b>Nazwa:</b>
                  Acer H5 X 24
                </div>
                <div className='single__product__quantity'>
                  <b>Ilość:</b>
                  25
                </div>
                <div className='single__product__price'>
                  <b>Cena:</b>
                  35
                </div>
            </div>   
          </div>
        </div>
        <div className='single__order__wrappper'>
          <div className='order__title'>
            <p className='order__info'>Id zamówienia: 2</p>
            <p className='order__info'>Status: Zrealizowane</p>
            <p className='order__info'>Data: </p>
            <p className='order__info'>Łączna kwota zamówienia: 2137 PLN</p> 
            <div style ={{width:'100%'}}>
                 <StyledDivider/>
            </div>
          </div>
          <div className='products__inorder__wrapper'>
            <div className='single__productInOrder__wrappper'>
                <div className='single__product__image'>
                  <img src = {computer} alt = "komputer img"/>
                </div>
                <div className='single__product__name'>
                  <b>Nazwa:</b>
                  Acer H5 X 24
                </div>
                <div className='single__product__quantity'>
                  <b>Ilość:</b>
                  25
                </div>
                <div className='single__product__price'>
                  <b>Cena:</b>
                  35
                </div>
                <div style ={{width:'100%'}}>
                 <StyledDivider/>
                </div>
            </div>  
            <div className='single__productInOrder__wrappper'>
                <div className='single__product__image'>
                  <img src = {computer} alt = "komputer img"/>
                </div>
                <div className='single__product__name'>
                  <b>Nazwa:</b>
                  Acer H5 X 24
                </div>
                <div className='single__product__quantity'>
                  <b>Ilość:</b>
                  25
                </div>
                <div className='single__product__price'>
                  <b>Cena:</b>
                  35
                </div>
            </div>   
          </div>
        </div>
    </div>
  )
}

export default UserRecentOrderComponent