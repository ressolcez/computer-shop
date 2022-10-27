import React, {useEffect,useContext,useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import Topbar from '../../AdminComponents/TopBar';
import AuthServices from '../../Services/AuthServices';
import Users from '../../AdminComponents/Users';
import UsersServices from '../../Services/UsersServices';

function AdminUsers() {

    const {user,setUser } = useContext(UserContext);
    const [users,setUsers] = useState([])

    useEffect(() => {  
         if(localStorage.getItem('token')){
             AuthServices.isAuthorized().then((response) => {
               if(response.data.status === 'pass' && response.data.role === 'admin'){
                 const user = {
                   userId: response.data.user_Id,
                   role: response.data.role
                 }
                 setUser(user)
               }else{
                console.log('zle')
               }
             });
           }  

           UsersServices.getAllUsers().then((response) => {
            setUsers(response.data);
           });
  
      }, []);


  return (
    <>
      <Topbar/>
      <Users users = {users}/>
    </>
  )
}

export default AdminUsers