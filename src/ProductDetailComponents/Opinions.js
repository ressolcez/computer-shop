import React from 'react'
import Rating from "@mui/material/Rating";
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import styled from 'styled-components';
import "./Opinions.css"
import Divider from '@mui/material/Divider';

const StyledDivider = styled(Divider)`
  background-color: black;
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
              <div className='NumberRates'>
                  {finalSum}/5
              </div>
              <Rating value={parseFloat(finalSum)} readOnly precision={0.5} />
              <div className='NumberOfAllOpinions'>Liczba opinii({liczba_ocen}) </div>
              <div className='opinion__number__divider'>
                <StyledDivider/>
              </div>
            </>
          );
    }

  return (
    <div className='opinions__count__rating__comment__wrappper'>
      {handleRating()}
          <div className='opinions__wrapper'>
            <div className='single__opinion__wrapper'>
                <div className='opinion__name__icon'>
                  <InsertEmoticonOutlinedIcon/> Konrad
                </div>
                <div className='opinion__rating__comment'>
                  <Rating value={4.5} readOnly precision={0.5} size = "small"/>
                  <div className='comment'>
                    asda
                  </div>
                </div>
                <div className='opinion__divider'>
                <StyledDivider/>  
                </div> 
            </div>
          </div>
    </div>
  )
}

export default Opinions