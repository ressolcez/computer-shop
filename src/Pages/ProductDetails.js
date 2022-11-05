import React, { useState,useEffect,useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import {useParams} from "react-router-dom";
import Topbar from '../Components/Topbar';
import Footer from '../Components/Footer';
import ItemDetail from '../ProductDetailComponents/ItemDetail';
import Specyfication from '../ProductDetailComponents/Specyfication';
import Opinions from '../ProductDetailComponents/Opinions';
import AddOpinion from '../ProductDetailComponents/AddOpinion';
import ProductDetailsServices from "../Services/ProductDetailsServices";
import OpinionsService from '../Services/OpinionsService';
import AuthServices from '../Services/AuthServices';
import StyledDivider from '../SharedComponent/StyledDivider';
import "./ProductDetails.css";

export default function ProductDetails() {
  
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [details, setDetails] = useState([]);
  const [opinions, setOpinions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
  const [opinionRate, setOpinionRate] = useState([]);
  const {user,setUser } = useContext(UserContext);

  useEffect(() => {
      ProductDetailsServices.getProductById(id).then((response) => {
         setProduct(response.data.product);
         setDetails(response.data.details)
       });

       OpinionsService.getOpinionsToProduct(id,page-1).then((response) => {
        setOpinions(response.data.opinions);
        setTotalNumberOfPages(response.data.totalPages);
      });

      OpinionsService.getOpinionToProductRate(id).then((response) => {
        setOpinionRate(response.data);
      });

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

    }, [page]);

  return (
    <div className='Product__Detail__Wrapper'>
        <Topbar user= {user} setUser = {setUser}/>
        <div style= {{flex:1}}>
          <ItemDetail product = {product}/>
          <StyledDivider/>
          {/*
            <h2 className='title__product__details'>Specyfikacja:</h2>
            <Specyfication details = {details}/>
          */}
          <h2 className='title__product__details'>Opinie:</h2>
          <Opinions opinions = {opinions} setPage = {setPage} totalNumberOfPages = {totalNumberOfPages} opinionRate = {opinionRate}/>
          <h2 className='title__product__details'>Dodaj opinie:</h2>
          <AddOpinion productId = {product.id} user = {user}/>
          <StyledDivider/>
          </div>
        <Footer/>
    </div>
  )
}
