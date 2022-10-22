import React from 'react'
import Rating from "@mui/material/Rating";
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import styled from 'styled-components';
import "./Opinions.css"
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';

const StyledDivider = styled(Divider)`
  background-color: black;
`

function Opinions({opinions,setPage,page,totalNumberOfPages, opinionRate}) {

  const handleChange = (event, value) => {
    setPage(value);
  };


  if(opinions.length !== 0){
    return (
      <div className='opinions__count__rating__comment__wrappper'>
            <div className='NumberRates'>
                {opinionRate.finalRate}/5
              </div>
              <Rating value= {parseFloat(opinionRate.finalRate)} readOnly precision={0.5} />
            <div className='NumberOfAllOpinions'>Liczba opinii({opinionRate.numberOfOpinions}) </div>
            <div className='opinion__number__divider'>
                  <StyledDivider/>
            </div>
            <div className='opinions__wrapper'>
            {opinions.map((opinion)=>(
              <div className='single__opinion__wrapper' key={opinion.id}>
                  <div className='opinion__name__icon'>
                    {opinion.rate > 3 ? <SentimentVeryDissatisfiedIcon/> : <InsertEmoticonOutlinedIcon/>}
                     {opinion.userModel.name}
                  </div>
                  <div className='opinion__rating__comment'>
                    <Rating value={opinion.rate} readOnly precision={0.5} size = "small" />
                    <div className='comment'>
                      {opinion.comment}
                    </div>
                  </div>
                  <div className='opinion__divider'>
                  <StyledDivider/>  
                  </div> 
              </div>
                  ))}

              <div className='pagination__cont'>
                <Pagination count={totalNumberOfPages} page={page} onChange={handleChange}/>
              </div>

            </div>
        </div>
      )
    }

      return <div className='info__zero__opinion'>Ten produkt nie ma jeszcze opinii</div>

}

export default Opinions