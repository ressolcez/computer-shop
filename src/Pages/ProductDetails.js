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

const StyledDivider = styled(Divider)`
  background-color: black;
`
const StyledTitle = styled.h2`
  margin-top: 2%;
`

export default function ProductDetails() {

  let { productId } = useParams();
  
  const [product, setProduct] = useState([]);
  const [opinions, setOpinions] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      ProductDetailsServices.getProductById(productId).then((response) => {
         setProduct(response.data);
         setLoading(false);
       });

       ProductDetailsServices.getOpinionsToProduct(productId).then((response) => {
        setOpinions(response.data);
        setLoading(false);
      });
    }, []);

  return (
    <div className='Product__Detail__Wrapper'>
        <Topbar/>
        <ItemDetail product = {product}/>
        <StyledDivider/>
        <StyledTitle>Specyfikacja:</StyledTitle>
        <Specyfication/>
         <StyledTitle>Opinie:</StyledTitle>
        <Opinions opinions = {opinions}/>
        <AddOpinion/>
        <StyledDivider/>
        <Footer/>
    </div>
  )
}
