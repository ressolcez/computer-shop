import React from 'react'
import Rating from "@mui/material/Rating";
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
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
          {opinions.map((product)=>(
            <div className='single__opinion__wrapper' key={product.id}>
                <div className='opinion__name__icon'>
                  <InsertEmoticonOutlinedIcon/> {product.userModel.name}
                </div>
                <div className='opinion__rating__comment'>
                  <Rating value={product.rate} readOnly precision={0.5} size = "small" />
                  <div className='comment'>
                    {product.comment}
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

export default Opinions