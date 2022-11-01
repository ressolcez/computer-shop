import React,{useEffect,useState,useContext} from 'react';
import { UserContext } from '../../Context/UserContext';
import Topbar from '../../AdminComponents/TopBar';
import FeaturedInfo from '../../AdminComponents/DashboardComponents/FeaturedInfo';
import AdminDashboardServices from '../../Services/AdminDashboardServices';
import ProductServices from '../../Services/ProductServices';
import ChartStatistic from '../../AdminComponents/DashboardComponents/ChartStatistic';
import MostOrderdByProducents from '../../AdminComponents/DashboardComponents/MostOrderdByProducents';
import "./AdminHome.css"
import {useNavigate} from "react-router-dom";
import AuthServices from '../../Services/AuthServices';

function AdminHome() {

  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const [waitingOrders, setWaitingOrders] = useState(0);
  const [profit, setProfit] = useState(0);
  const [salesByCategory, setSalesByCategory] = useState([])
  const [mostOrderdByProducents, setmostOrderdByProducents] = useState([])
  const navigate = useNavigate();
  const {user,setUser } = useContext(UserContext);

  
  useEffect(() => {  
    AdminDashboardServices.getNumberOfUsers().then((response) => {
      setNumberOfUsers(response.data);
     });
     AdminDashboardServices.getActiveUsers().then((response) => {
      setActiveUsers(response.data);
     });

     AdminDashboardServices.getNumberOfOrders().then((response) => {
      setNumberOfOrders(response.data);
     });

     AdminDashboardServices.getNumberWaitingOrders().then((response) => {
      setWaitingOrders(response.data);
     });

     AdminDashboardServices.getProfit().then((response) => {
      setProfit(response.data);
     });

     AdminDashboardServices.getSalesByCategory().then((response) => {
      setSalesByCategory(response.data);
     });

     ProductServices.findMostOrderdByProducents().then((response) => {
      setmostOrderdByProducents(response.data);
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

  }, []);

  return (
    <div>
      <Topbar user = {user} setUser = {setUser}/>
      <FeaturedInfo numberOfUsers = {numberOfUsers} activeUsers = {activeUsers} numberOfOrders = {numberOfOrders} waitingOrders = {waitingOrders} profit = {profit} />
      <ChartStatistic salesByCategory = {salesByCategory} mostOrderdByProducents = {mostOrderdByProducents}/>
    </div>
  )
}

export default AdminHome