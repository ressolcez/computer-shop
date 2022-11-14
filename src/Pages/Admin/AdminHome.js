import React,{useEffect,useState,useContext} from 'react';
import { UserContext } from '../../Context/UserContext';
import {useNavigate} from "react-router-dom";
import Topbar from '../../AdminComponents/TopBar';
import FeaturedInfo from '../../AdminComponents/DashboardComponents/FeaturedInfo';
import AdminDashboardServices from '../../Services/AdminDashboardServices';
import ProductServices from '../../Services/ProductServices';
import ChartStatistic from '../../AdminComponents/DashboardComponents/ChartStatistic';
import AuthServices from '../../Services/AuthServices';
import WaitPage from '../../SharedComponent/WaitPage';
import "./AdminHome.css"


function AdminHome() {

  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const [waitingOrders, setWaitingOrders] = useState(0);
  const [profit, setProfit] = useState(0);
  const [salesByCategory, setSalesByCategory] = useState([])
  const [mostOrderdByProducents, setmostOrderdByProducents] = useState([])
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {user,setUser } = useContext(UserContext);

  useEffect(() => {  

    const getHomePageContent = async () => {
      const NumberOfUsers = await AdminDashboardServices.getNumberOfUsers();
      const ActiveUsers = await AdminDashboardServices.getActiveUsers();
      const NumberOfOrders = await AdminDashboardServices.getNumberOfOrders();
      const NumberWaitingOrders = await AdminDashboardServices.getNumberWaitingOrders();
      const Profit = await AdminDashboardServices.getProfit();
      const SalesByCategory = await AdminDashboardServices.getSalesByCategory();
      const MostOrderdByProducents = await ProductServices.findMostOrderdByProducents();

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


    Promise.all([NumberOfUsers, ActiveUsers,NumberOfOrders,NumberWaitingOrders,Profit,SalesByCategory,MostOrderdByProducents]).then(function(response) {   
      authorizedFunction();
      setNumberOfUsers(response[0].data);
      setActiveUsers(response[1].data);
      setNumberOfOrders(response[2].data);
      setWaitingOrders(response[3].data);
      setProfit(response[4].data);
      setSalesByCategory(response[5].data);
      setmostOrderdByProducents(response[6].data);

    })
}
        getHomePageContent().then (() =>{
          setLoading(false)
        }).catch (() =>{
          setLoading(true)
        })

  }, []);

  if (loading) return <WaitPage/>

  return (
    <div>
      <Topbar user = {user} setUser = {setUser}/>
      <FeaturedInfo numberOfUsers = {numberOfUsers} activeUsers = {activeUsers} numberOfOrders = {numberOfOrders} waitingOrders = {waitingOrders} profit = {profit} />
      <ChartStatistic salesByCategory = {salesByCategory} mostOrderdByProducents = {mostOrderdByProducents}/>
    </div>
  )
}

export default AdminHome