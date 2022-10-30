import React, { useState,useEffect,useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import Products from '../../AdminComponents/Products';
import Topbar from '../../AdminComponents/TopBar';
import AuthServices from '../../Services/AuthServices';
import ProductServices from '../../Services/ProductServices';

function AdminProducts() {

  const {user,setUser } = useContext(UserContext);
  const [products,setProducts] = useState([]);
  const [productId, setProductId] = useState();


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

         ProductServices.getAllProducts().then((response) => {
          setProducts(response.data);
         });

         if(productId){
          ProductServices.deleteProduct(productId);
          window.location.reload('false')
         }

    }, [productId]);

  return (
    <>
      <Topbar/>
      <Products products = {products} setProductId = {setProductId}/>
    </>
  )
}

export default AdminProducts