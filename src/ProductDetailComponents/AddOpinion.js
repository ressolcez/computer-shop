import React, {useState} from 'react'
import Button from '@mui/material/Button';
import './AddOpinion.css'
import TextField from '@mui/material/TextField';
import OpinionsService from '../Services/OpinionsService';
import Rating from "@mui/material/Rating";

function AddOpinion({productId}) {

   const [comment,setComment] = useState('');
   const [rate,setRate] = useState(0)


   const handleAddOpinion = () =>{
         const opinion = {comment,rate};

         OpinionsService.addOpinionToProduct(opinion,productId).then((response) => {
              window.location.reload("false");
          });

   }

  return (
    <div className='addOpinion__wrappper'>
         <Rating
            name="simple-controlled"
            value={rate}
            onChange={(event, newValue) => {
            setRate(newValue);
         }}
      />
       <div className='addopinion__input__container'>
          <TextField multiline className="add__opinion__input"  variant="outlined" onChange={(e) => setComment(e.target.value)}/>
       </div>
       <div className='addOpinion__button__container'>
          <Button variant="contained" onClick = {handleAddOpinion}>Dodaj opinie</Button>
       </div>
    </div>
  )
}

export default AddOpinion