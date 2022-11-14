import React, { useState,useEffect,useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import Topbar from '../Components/Topbar';
import Footer from '../Components/Footer';
import CreateOrderComponent from "../CreateOrderComponent/CreateOrderComponent";
import AuthServices from '../Services/AuthServices';
import StyledDivider from '../SharedComponent/StyledDivider';
import UsersServices from '../Services/UsersServices';
import "./CreateOrder.css"


export default function CreateOrder() {

const {user,setUser } = useContext(UserContext);
const [userData,setUserData] = useState()

useEffect(() => {

  const authorizedFunction = () => {
       if(localStorage.getItem('token')){
           AuthServices.isAuthorized().then((response) => {
             if(response.data.status === 'pass'){
               const user = {
                 userId: response.data.user_Id,
                 role: response.data.role
               }
               UsersServices.getUserById(response.data.user_Id).then ((response) =>{
                setUserData(response.data);
              })
               setUser(user)
             }
           });
         }
      }

      authorizedFunction();

    }, []);

  return (
    <div className='createOrder__wrapper'>
        <Topbar user = {user} setUser = {setUser}/>
        <div style= {{flex:1}}>
           {userData && <CreateOrderComponent userdata = {userData} user = {user}/>}
        </div>
        <StyledDivider/>
        <Footer/>
    </div>
  )
}
 