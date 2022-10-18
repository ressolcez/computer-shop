import React, { useState,useEffect } from 'react';
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
  const [allOpinion, setAllOpinion] = useState([]);

  useEffect(() => {
      ProductDetailsServices.getProductById(id).then((response) => {
         setProduct(response.data);
       });

       OpinionsService.getOpinionsToProduct(id,page-1).then((response) => {
        setOpinions(response.data.opinions);
        setTotalNumberOfPages(response.data.totalPages);
      });

      OpinionsService.getAllOpinionToProduct(id).then((response) => {
        setAllOpinion(response.data);
      });

    }, [page]);

  return (
    <div className='Product__Detail__Wrapper'>
        <Topbar/>
        <ItemDetail product = {product}/>
        <StyledDivider/>
        <StyledTitle>Specyfikacja:</StyledTitle>
        <Specyfication/>
          <StyledTitle>Opinie:</StyledTitle>
        <Opinions opinions = {opinions} setPage = {setPage} totalNumberOfPages = {totalNumberOfPages} allOpinion = {allOpinion}/>
        <AddOpinion productId = {product.id}/>
        <StyledDivider/>
        <Footer/>
    </div>
  )
}
