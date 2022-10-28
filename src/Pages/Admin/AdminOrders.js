import React, { useState,useEffect,useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import Topbar from '../../AdminComponents/TopBar';
import OrdersServices from '../../Services/OrdersServices';
import Orders from '../../AdminComponents/Orders';



function AdminOrders() {

  const {user,setUser } = useContext(UserContext);
  const [orders,setOrders] = useState([]);
  
  useEffect(() => {  
        OrdersServices.getAllOrders().then((response) => {
         setOrders(response.data);
        });
   }, []);

  return (
    <>
      <Topbar/>
      <Orders orders = {orders}/>
    </>
    )
}

export default AdminOrders