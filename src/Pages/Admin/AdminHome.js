import React,{useEffect,useState} from 'react';
import Topbar from '../../AdminComponents/TopBar';
import FeaturedInfo from '../../AdminComponents/DashboardComponents/FeaturedInfo';
import AdminDashboardServices from '../../Services/AdminDashboardServices';
import ProductServices from '../../Services/ProductServices';
import SalesByCategory from '../../AdminComponents/DashboardComponents/SalesByCategory';
import MostOrderdByProducents from '../../AdminComponents/DashboardComponents/MostOrderdByProducents';

function AdminHome() {

  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const [waitingOrders, setWaitingOrders] = useState(0);
  const [profit, setProfit] = useState(0);
  const [salesByCategory, setSalesByCategory] = useState([])
  const [mostOrderdByProducents, setmostOrderdByProducents] = useState([])

  
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

  }, []);

  return (
    <div>
      <Topbar/>
      <FeaturedInfo numberOfUsers = {numberOfUsers} activeUsers = {activeUsers} numberOfOrders = {numberOfOrders} waitingOrders = {waitingOrders} profit = {profit} />
      <SalesByCategory salesByCategory = {salesByCategory}/>
      <MostOrderdByProducents mostOrderdByProducents = {mostOrderdByProducents}/>
      </div>
  )
}

export default AdminHome