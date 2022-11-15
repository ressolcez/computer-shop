import React, { useState,useEffect,useContext } from 'react';
import {UserContext} from '../../Context/UserContext';
import {useNavigate} from "react-router-dom";
import Topbar from '../../AdminComponents/TopBar';
import OrderServices from '../../Services/OrderServices';
import Orders from '../../AdminComponents/Orders';
import AuthServices from '../../Services/AuthServices';
import WaitPage from '../../SharedComponent/WaitPage';


function AdminOrders() {

  const {user,setUser } = useContext(UserContext);
  const [orders,setOrders] = useState([]);
  const navigate = useNavigate();
    
  const [openModalEditOrder, setOpenModalEditOrder] = useState(false);
  const [page, setPage] = useState(0);
  const [rowCount,setrowCount] = useState(0);
  const [searchWord,setSearchWord] = useState('');
  const [loading, setLoading] = useState(true);

  const deleteOrder = (orderId) =>{
    OrderServices.deleteOrder(orderId)
    window.location.reload(false)
  }

  const onFilterChange = React.useCallback((filterModel) => {
    setSearchWord(filterModel.quickFilterValues.toString());
  }, []);

  useEffect(() => {  

    const getHomePageContent = async () => {

      const allOrders = await OrderServices.getAllOrdersWithDifference(page,searchWord);
    
      const authorizedFunction = () => {
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
                }).catch(() => {
                navigate("/Login")
            })
              }else{
              navigate("/NotFound")
            }   
          }
    
          Promise.all([allOrders]).then(function(response) {   
            setOrders(response[0].data.orders);
            setrowCount(response[0].data.rowCount);
            authorizedFunction();
          })
        }

        getHomePageContent().then (() =>{
          setLoading(false)
        }).catch (() =>{
          setLoading(true)
        })

   }, [openModalEditOrder,page,searchWord]);

   if (loading) return <WaitPage/>

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