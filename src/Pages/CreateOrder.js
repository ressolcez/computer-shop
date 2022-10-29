import React, { useState,useEffect,useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import Topbar from '../Components/Topbar';
import Footer from '../Components/Footer';
import CreateOrderComponent from "../CreateOrderComponent/CreateOrderComponent";
import AuthServices from '../Services/AuthServices';
import StyledDivider from '../SharedComponent/StyledDivider';
import "./CreateOrder.css"


export default function CreateOrder() {

const {user,setUser } = useContext(UserContext);

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
    <div className='createOrder__wrapper'>
        <Topbar user = {user} setUser = {setUser}/>
        <div style= {{flex:1}}>
            <CreateOrderComponent/>
        </div>
        <StyledDivider/>
        <Footer/>
    </div>
  )
}
 