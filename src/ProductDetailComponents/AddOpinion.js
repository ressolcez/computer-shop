import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Rating from "@mui/material/Rating";
import OpinionsService from '../Services/OpinionsService';
import SnackbarSuccess from '../SharedComponent/SnackbarSuccess';
import './AddOpinion.css';


function AddOpinion({productId,user}) {

   const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
   const [comment,setComment] = useState('');
   const [rate,setRate] = useState(0)


   const handleAddOpinion = () =>{

      const opinion = {comment,rate};
      OpinionsService.addOpinionToProduct(opinion,productId,user.userId).then((response) => {
         setTimeout(() => {
            window.location.reload("false");
          }, 1000);
      });

      setOpenSnackbarSuccess(true);
   }

   const handleCloseSnackbarSuccess = (reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbarSuccess(false);
    };

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
      <SnackbarSuccess openSnackbarSuccess = {openSnackbarSuccess} handleCloseSnackbarSuccess = {handleCloseSnackbarSuccess} message = "Dodano Opinie"/>
   </>
  )
}

export default AddOpinion