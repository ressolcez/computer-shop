import React, { useState,useEffect,useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import AuthServices from '../Services/AuthServices';
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import UserRecentOrderComponent from '../UserOrderComponent/UserRecentOrderComponent';
import "./UserRecentOrders.css";


function UserRecentOrders() {

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
    <main className='userRecentOrders__wrapper'>
        <Topbar user = {user} setUser = {setUser}/>
        <div style= {{flex:1}}>
            <UserRecentOrderComponent user = {user}/>
        </div>
        <Footer/>
    </main>
  )
}

export default UserRecentOrders