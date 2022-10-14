import React from 'react'
import "./ProductDetails.css"
import Topbar from '../Components/Topbar'
import Footer from '../Components/Footer'
import ItemDetail from '../ProductDetailComponents/ItemDetail'
import Specyfication from '../ProductDetailComponents/Specyfication'
import Opinions from '../ProductDetailComponents/Opinions'
import AddOpinion from '../ProductDetailComponents/AddOpinion'
import Divider from '@mui/material/Divider';
import styled from 'styled-components';

const StyledDivider = styled(Divider)`
  background-color: black;
`
const StyledTitle = styled.h2`
  margin-top: 2%;
`

export default function ProductDetails() {
  return (
    <div className='Product__Detail__Wrapper'>
        <Topbar/>
        <ItemDetail/>
        <StyledDivider/>
        <StyledTitle>Specyfikacja:</StyledTitle>
        <Specyfication/>
         <StyledTitle>Opinie:</StyledTitle>
        <Opinions/>
        <AddOpinion/>
        <StyledDivider/>
        <Footer/>
    </div>
  )
}
