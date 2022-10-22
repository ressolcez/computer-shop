import React, {useEffect,useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import CartOrderComponent from '../CartComponents/CartOrderComponent';
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import styled from "styled-components";
import Divider from '@mui/material/Divider';
import AuthServices from '../Services/AuthServices';
import "./Cart.css"

const StyledDivider = styled(Divider)`
  background-color: black;
`

function Cart() {
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {

       if(localStorage.getItem('token')){
           AuthServices.isAuthorized().then((response) => {
             if(response.data.status === 'pass'){
               const user = {
                 userId: response.data.user_Id,
                 role: response.data.role
               }
               setUser(user)
             }
           });
         }  

    }, []);

  return (
        <div className='Cart__wrapper'>
          <Topbar user = {user} setUser = {setUser}/>
        <div className='CartHeading'>
          <h2>Twój Koszyk</h2>
        </div>
        <div style= {{flex:1}}>
          <CartOrderComponent user = {user}/>
        </div>
        <StyledDivider/>
          <Footer/>
        </div>
  )
}

export default Cart