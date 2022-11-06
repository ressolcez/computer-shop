import React, { useState,useEffect,useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import Topbar from '../../AdminComponents/TopBar';
import OrderServices from '../../Services/OrderServices';
import Orders from '../../AdminComponents/Orders';
import {useNavigate} from "react-router-dom";
import AuthServices from '../../Services/AuthServices';


function AdminOrders() {

  const {user,setUser } = useContext(UserContext);
  const [orders,setOrders] = useState([]);
  const navigate = useNavigate();
    
  const [openModalEditOrder, setOpenModalEditOrder] = useState(false);
  const [page, setPage] = useState(0);
  const [rowCount,setrowCount] = useState(0);

  useEffect(() => {  

        OrderServices.getAllOrdersWithDifference(page).then((response) => {
         setOrders(response.data.orders);
         setrowCount(response.data.rowCount);
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
          }).catch((error) => {
            navigate("/Login")
        })
        }else{
          navigate("/NotFound")
        }


   }, [openModalEditOrder,page]);

  return (
    <>
      <Topbar user = {user} setUser = {setUser}/>
      <Orders 
        orders = {orders}
        openModalEditOrder = {openModalEditOrder}
        setOpenModalEditOrder = {setOpenModalEditOrder}
        page = {page}
        setPage = {setPage}
        rowCount = {rowCount}
      />
    </>
    )
}

export default AdminOrders