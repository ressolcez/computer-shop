import React, { useState,useEffect,useContext } from 'react';
import {UserContext} from '../../Context/UserContext';
import {useNavigate} from "react-router-dom";
import Topbar from '../../AdminComponents/TopBar';
import OrderServices from '../../Services/OrderServices';
import Orders from '../../AdminComponents/Orders';
import AuthServices from '../../Services/AuthServices';


function AdminOrders() {

  const {user,setUser } = useContext(UserContext);
  const [orders,setOrders] = useState([]);
  const navigate = useNavigate();
    
  const [openModalEditOrder, setOpenModalEditOrder] = useState(false);
  const [page, setPage] = useState(0);
  const [rowCount,setrowCount] = useState(0);
  const [searchWord,setSearchWord] = useState('');

  const deleteOrder = (orderId) =>{
    OrderServices.deleteOrder(orderId)
    window.location.reload(false)
  }

  const onFilterChange = React.useCallback((filterModel) => {
    setSearchWord(filterModel.quickFilterValues.toString());
  }, []);

  useEffect(() => {  
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

        OrderServices.getAllOrdersWithDifference(page,searchWord).then((response) => {
          setOrders(response.data.orders);
          setrowCount(response.data.rowCount);
         });


   }, [openModalEditOrder,page,searchWord]);

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
        deleteOrder = {deleteOrder}
        onFilterChange = {onFilterChange}
      />
    </>
    )
}

export default AdminOrders