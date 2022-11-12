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
  const [page, setPage] = useState(0);
  const [rowCount,setrowCount] = useState(0);
  const [searchWord,setSearchWord] = useState('');
  const navigate = useNavigate();

  const deleteProduct = (productId) =>{
    ProductServices.deleteProduct(productId)
    window.location.reload(false)
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

         ProductServices.getAllProducts(page,searchWord).then((response) => {
          setProducts(response.data.products);
          setrowCount(response.data.rowCount);
         });


    }, [openModalEditProduct,openModalAddProduct,page,searchWord]);

  return (
    <>
      <Topbar user = {user} setUser = {setUser}/>
      <Products 
        openModalAddProduct = {openModalAddProduct} 
        setOpenModalAddProduct = {setOpenModalAddProduct}
        openModalEditProduct = {openModalEditProduct} 
        setOpenModalEditProduct = {setOpenModalEditProduct} 
        products = {products}
        page = {page}
        setPage = {setPage}
        rowCount = {rowCount}
        onFilterChange = {onFilterChange}
        deleteProduct = {deleteProduct}
       />
    </>
  )
}

export default AdminProducts