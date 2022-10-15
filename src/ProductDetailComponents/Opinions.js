import React from 'react'
import Rating from "@mui/material/Rating";
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

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

const OpinionsTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const SingleOpinionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`


function Opinions({opinions}) {

    const handleRating = () => {

        var rating = 0;
        var liczba_ocen = opinions.length;
        
          for(var i=0; i< liczba_ocen ; i++) 
          {
            rating += opinions[i].rate;
          }
    
          var finalSum = rating/liczba_ocen;
          finalSum = finalSum.toFixed(1);
    
          
          if(liczba_ocen === 0 ){
            finalSum = 0;
          }
    
          return(
            <>
            <NumberRate>
                {finalSum}/5
            </NumberRate>
            <Rating value={parseFloat(finalSum)} readOnly precision={0.5} />
            <NumberOfOpinions>Liczba opinii({liczba_ocen}) </NumberOfOpinions>
            </>
          );
    }

  return (
    <Container>
        {handleRating()}

      <Table responsivestriped bordered hover size="sm">
       
        </Table>

    </Container>
  )
}

export default Opinions