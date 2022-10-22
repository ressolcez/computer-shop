import React, { useState,useEffect,useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import "./ProductDetails.css";
import Topbar from '../Components/Topbar';
import Footer from '../Components/Footer';
import ItemDetail from '../ProductDetailComponents/ItemDetail';
import Specyfication from '../ProductDetailComponents/Specyfication';
import Opinions from '../ProductDetailComponents/Opinions';
import AddOpinion from '../ProductDetailComponents/AddOpinion';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import ProductDetailsServices from "../Services/ProductDetailsServices";
import OpinionsService from '../Services/OpinionsService';
import AuthServices from '../Services/AuthServices';

const StyledDivider = styled(Divider)`
  background-color: black;
`
const StyledTitle = styled.h2`
  margin-top: 2%;
`

export default function ProductDetails() {

  let { id } = useParams();
  
  const [product, setProduct] = useState([]);
  const [opinions, setOpinions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
  const [opinionRate, setOpinionRate] = useState([]);

  const {user,setUser } = useContext(UserContext);

  useEffect(() => {
      ProductDetailsServices.getProductById(id).then((response) => {
         setProduct(response.data);
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
        <ItemDetail product = {product}/>
        <StyledDivider/>
          <StyledTitle>Specyfikacja:</StyledTitle>
        <Specyfication/>
          <StyledTitle>Opinie:</StyledTitle>
        <Opinions opinions = {opinions} setPage = {setPage} totalNumberOfPages = {totalNumberOfPages} opinionRate = {opinionRate}/>
          <StyledTitle>Dodaj opinie:</StyledTitle>
        <AddOpinion productId = {product.id} user = {user}/>
        <StyledDivider/>
        <Footer/>
    </div>
  )
}
