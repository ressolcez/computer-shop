import React, {useState,useContext} from 'react'
import { UserContext } from '../Context/UserContext';
import Button from '@mui/material/Button';
import './AddOpinion.css'
import TextField from '@mui/material/TextField';
import OpinionsService from '../Services/OpinionsService';
import Rating from "@mui/material/Rating";

function AddOpinion({productId,user}) {

   const [comment,setComment] = useState('');
   const [rate,setRate] = useState(0)


   const handleAddOpinion = () =>{
         const opinion = {comment,rate};

         OpinionsService.addOpinionToProduct(opinion,productId,user.userId).then((response) => {
              window.location.reload("false");
          });

   }

  return (
   <>
   {user ? ( 
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
      ) : (
         <div className='no__login__user__info'> Zaloguj się aby dodać opinie.</div>
      )
      }
   </>
  )
}

export default AddOpinion