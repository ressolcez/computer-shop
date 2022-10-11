import React from 'react'
import Rating from "@mui/material/Rating";
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const NumberRate = styled.div`
    display:flex;
    font-size: 20px;
`

const NumberOfOpinions = styled.p`
    margin: 0;
    font-size: 20px;
`


function Opinions() {
  return (
    <Container>
        <NumberRate>
            0/5
        </NumberRate>
        <Rating name="read-only" value= "5" readOnly />
        <NumberOfOpinions>Liczba opinii </NumberOfOpinions>

    </Container>
  )
}

export default Opinions