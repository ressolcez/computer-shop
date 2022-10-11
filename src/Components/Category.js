import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
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

function Category() {
  return (
    <Container>
    <Image />
    <Info>
      <Title>NAME</Title>
    </Info>
  </Container>
  )
}

export default Category