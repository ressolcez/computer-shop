import React, {useEffect,useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import AuthServices from '../Services/AuthServices';
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import EditUserAccountComponent from "../UserAccountComponent/EditUserAccountComponent";
import StyledDivider from '../SharedComponent/StyledDivider';
import "./UserEditAccount.css";

function UserEditAccount() {

  const {user,setUser } = useContext(UserContext);

  useEffect(() => {
     
         if(localStorage.getItem('token')){
             AuthServices.isAuthorized().then((response) => {
               if(response.data.status === 'pass'){
                 const user = {
                   userId: response.data.user_Id,
                   role: response.data.role
                 }
                 setUser(user)
               }
             });
           }  

      }, []);

  return (
    <main className='userEditAccount__wrapper'>
      <Topbar user={user} setUser = {setUser}/>
      <div style = {{flex:1, marginRight:'20%', marginLeft:'20%'}}>
        <EditUserAccountComponent/>
      </div>
      <StyledDivider/>
      <Footer/>
    </main>
  )
}

export default UserEditAccount