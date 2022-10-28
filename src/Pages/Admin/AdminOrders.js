import React, { useState,useEffect,useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import Topbar from '../../AdminComponents/TopBar';
import AuthServices from '../../Services/AuthServices';

import React from 'react'

const {user,setUser } = useContext(UserContext);
const [orders,setOrders] = useState([]);

useEffect(() => {  
      ProductServices.getAllProducts().then((response) => {
       setProducts(response.data);
      });

 }, []);


function AdminOrders() {
  return (
    <div>AdminOrders</div>
  )
}

export default AdminOrders