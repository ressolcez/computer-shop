import React, { useState,useEffect,useContext } from 'react';
import {UserContext} from '../../Context/UserContext';
import {useNavigate} from "react-router-dom";
import Topbar from '../../AdminComponents/TopBar';
import AuthServices from '../../Services/AuthServices';
import Opinions from '../../AdminComponents/Opinions';
import OpinionsService from '../../Services/OpinionsService';

function AdminOpinions() {

    const {user,setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [openModalEditopinions, setOpenModalEditOpinions] = useState(false);
    const [page, setPage] = useState(0);
    const [opinions, setOpinions] = useState([]);
    const [rowCount,setrowCount] = useState(0);

    const deleteOpinion = (opinionId) =>{
      OpinionsService.deleteOpinion(opinionId)
      window.location.reload(false)
    }

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

        OpinionsService.getAllOpinions(page).then((response) => {
          setOpinions(response.data.opinions);
          setrowCount(response.data.rowCount);
         });


   }, [page,openModalEditopinions]);


  return (
    <>
        <Topbar/>
        <Opinions
          opinions = {opinions}
          page = {page}
          setPage = {setPage}
          rowCount = {rowCount}
          openModalEditopinions = {openModalEditopinions}
          setOpenModalEditOpinions = {setOpenModalEditOpinions}
          deleteOpinion = {deleteOpinion}
        />
    </>
  )
}

export default AdminOpinions