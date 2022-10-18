import React from 'react'
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import CategoryComponent from '../CategoryComponents/CategoryComponent';
import "./Category.css";
import Divider from '@mui/material/Divider';
import styled from "styled-components"

const StyledDivider = styled(Divider)`
  background-color: black;
`
function Category() {
  return (
    <div className="category__wrappper">
    <Topbar/>
        <div style= {{flex:1}}>
          <CategoryComponent/>
        </div>
        <StyledDivider/>
      <Footer/>
    </div>
  )
}

export default Category