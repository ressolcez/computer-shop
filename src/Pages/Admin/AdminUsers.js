import React, {useEffect,useContext,useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import Topbar from '../../AdminComponents/TopBar';
import AuthServices from '../../Services/AuthServices';
import Users from '../../AdminComponents/Users';
import UsersServices from '../../Services/UsersServices';
import {useNavigate} from "react-router-dom";

function AdminUsers() {

    const {user,setUser } = useContext(UserContext);
    const [users,setUsers] = useState([])
    const [openModalAddUser, setOpenModalAddUser] = useState(false);
    const [openModalEditUser, setOpenModalEditUser] = useState(false);
    const [page, setPage] = useState(0);
    const [rowCount,setrowCount] = useState(0);
    const [searchWord,setSearchWord] = useState('');

    const navigate = useNavigate();

    const deleteUser = (userId) =>{
      AuthServices.deleteUserToken(userId);
      UsersServices.deleteUser(userId);
      window.location.reload(false);
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
          
          UsersServices.getAllUsers(page,searchWord).then((response) => {
            setUsers(response.data.users);
            setrowCount(response.data.rowCount);
           });
  
      }, [openModalEditUser,openModalAddUser,page,searchWord]);


  return (
    <>
      <Topbar user = {user} setUser = {setUser}/>
      <Users 
      users = {users} 
      openModalEditUser = {openModalEditUser}
      openModalAddUser = {openModalAddUser}
      setOpenModalAddUser = {setOpenModalAddUser}
      setOpenModalEditUser = {setOpenModalEditUser}
      page = {page}
      setPage = {setPage}
      rowCount = {rowCount}
      deleteUser = {deleteUser}
      onFilterChange = {onFilterChange}
      />
    </>
  )
}

export default AdminUsers