import React from 'react';
import TextField from '@mui/material/TextField';
import computer from "../Images/komputer2.jpg"
import "./UserRecentOrderComponent.css"

function UserRecentOrderComponent({user}) {

  return (
    <div className='userRecentOrderComponent__wrapper'>
        <div className='single__order__wrappper'>
          <div className='order__title'>
            <p className='order__info'>Id zamówienia: 2</p>
            <p className='order__info'>Status: Zrealizowane</p>
            <p className='order__info'>Data: </p>
            <p className='order__info'>Łączna kwota zamówienia: 2137 PLN</p> 
          </div>
          <div className='products__inorder__wrapper'>
            <div className='single__productInOrder__wrappper'>
                <div className='single__product__image'>
                  <img src = {computer} alt = "komputer img"/>
                </div>
                <div className='single__prodct__name'>
                  <b>Nazwa:</b>

                </div>
                <div className='single__product__quantity'>
                  <b>Ilość:</b>
                </div>
                <div className='single__product__price'>
                  <b>Cena:</b>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserRecentOrderComponent