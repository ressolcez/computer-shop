import React, {useEffect } from 'react'
import ItemsCart from '../CartComponents/ItemsCart'
import Footer from '../Components/Footer'
import Topbar from '../Components/Topbar'
import "./Cart.css"

function Cart() {




  return (
        <div className='Cart__wrapper'>
        <Topbar/>
        <ItemsCart/>
        <Footer/>
        </div>
  )
}

export default Cart