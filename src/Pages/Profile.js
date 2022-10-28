import ProfileComponent from '../ProfileComponents/ProfileComponent';
import React, { useState,useEffect,useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import AuthServices from '../Services/AuthServices';
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import StyledDivider from '../SharedComponent/StyledDivider';
import UsersServices from '../Services/UsersServices';
import "./Profile.css"

function Profile() {

    const {user,setUser } = useContext(UserContext);
    
    const [userData,setUserData] = useState([])

    useEffect(() => {
           if(localStorage.getItem('token')){
               AuthServices.isAuthorized().then((response) => {
                 if(response.data.status === 'pass'){
                   const user = {
                     userId: response.data.user_Id,
                     role: response.data.role
                   }

                  UsersServices.getUserById(response.data.user_Id).then ((response) =>{
                    setUserData(response.data);
                  })
                   setUser(user)
                 }
               });
             }  
        }, []);

        
  return (
    <div className='profile__wrapper'>
        <Topbar user = {user} setUser = {setUser}/>
        <div style= {{flex:1}}>
            <ProfileComponent userdata = {userData}/>
        </div>
        <StyledDivider/>
        <Footer/>
    </div>
  )
}

export default Profile