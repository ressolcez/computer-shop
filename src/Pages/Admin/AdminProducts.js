import React, { useState,useEffect,useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import Products from '../../AdminComponents/Products';
import Topbar from '../../AdminComponents/TopBar';
import AuthServices from '../../Services/AuthServices';
import ProductServices from '../../Services/ProductServices';
import {useNavigate} from "react-router-dom";

function AdminProducts() {

  const {user,setUser } = useContext(UserContext);
  const [products,setProducts] = useState([]);
  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);
  const [openModalEditProduct, setOpenModalEditProduct] = useState(false);
  const [isDeleted, setIsDeleted] = useState(true);


  const navigate = useNavigate();


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
           });
         }else{
          navigate("/NotFound")
        }   

         ProductServices.getAllProducts().then((response) => {
          setProducts(response.data);
         });

    }, [isDeleted,openModalEditProduct,openModalAddProduct]);

  return (
    <>
      <Topbar/>
      <Products 
       openModalAddProduct = {openModalAddProduct} 
       setOpenModalAddProduct = {setOpenModalAddProduct}
       openModalEditProduct = {openModalEditProduct} 
       setOpenModalEditProduct = {setOpenModalEditProduct} 
       isDeleted = {isDeleted}
       setIsDeleted = {setIsDeleted}
       products = {products}
       />
    </>
  )
}

export default AdminProducts