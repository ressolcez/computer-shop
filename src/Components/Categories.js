import React from 'react'
import {Link } from "react-router-dom";
import "./Categories.css"
import styled from "styled-components";
import CategoriesImg from "../Images/categories.jpg"

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover{
    color: black;
    text-decoration: none;
  }
`
const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  position: relative;
  @media (max-width: 470px) {
    width: 100%;
}
`;

  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Title = styled.h1`
      color:#F08080;
  `;

export default function Categories() {
  return (
    <StyledLink to={"/Category"} >
    <div className='categories__wrappper'> 
   
      <Container>
        <Image src = {CategoriesImg}/>
        <Info>
          <Title>Wszystkie kategorie</Title>
        </Info>
      </Container>
    </div>
    </StyledLink>
  )
}
