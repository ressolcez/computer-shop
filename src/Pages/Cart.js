import React, {useEffect } from 'react'
import CartOrderComponent from '../CartComponents/CartOrderComponent'
import Footer from '../Components/Footer'
import Topbar from '../Components/Topbar'
import "./Cart.css"

function Cart() {

  return (
        <div className='Cart__wrapper'>
        <Topbar/>
        <div className='CartHeading'>
          <h2>Twój Koszyk</h2>
        </div>
        <div style= {{flex:1}}>
          <CartOrderComponent/>
        </div>
        <Footer/>
        </div>
  )
}

export default Cart