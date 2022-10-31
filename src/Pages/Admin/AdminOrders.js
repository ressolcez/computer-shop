import React, { useState,useEffect,useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import Topbar from '../../AdminComponents/TopBar';
import OrdersServices from '../../Services/OrdersServices';
import Orders from '../../AdminComponents/Orders';
import {useNavigate} from "react-router-dom";
import AuthServices from '../../Services/AuthServices';


function AdminOrders() {

  const {user,setUser } = useContext(UserContext);
  const [orders,setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {  
        OrdersServices.getAllOrders().then((response) => {
         setOrders(response.data);
        });

        if(localStorage.getItem('token')){
          AuthServices.isAuthorized().then((response) => {
            if(response.data.status === 'pass' && response.data.role === 'Admin'){
              const user = {
                userId: response.data.user_Id,
                role: response.data.role
              }
              setUser(user)
            }else{
             navigate("/NotFound")
            }
          });
        }else{
          navigate("/NotFound")
        }   
   }, []);

  return (
    <>
      <Topbar/>
      <Orders orders = {orders}/>
    </>
    )
}

export default AdminOrders