import React, {useEffect,useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import AuthServices from '../Services/AuthServices';
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import UserRecentOrderComponent from '../UserAccountComponent/UserRecentOrderComponent';
import StyledDivider from '../SharedComponent/StyledDivider';
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
        <div className='UserRecentOrders__wrapper'>
          <h3>Twoje zamówienia: </h3>
        </div>
        <div style= {{flex:1}}>
            <UserRecentOrderComponent user = {user}/>
        </div>
        <StyledDivider/>
        <Footer/>
    </main>
  )
}

export default UserRecentOrders