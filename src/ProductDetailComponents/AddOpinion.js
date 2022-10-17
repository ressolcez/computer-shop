import React from 'react'
import Button from '@mui/material/Button';
import AddCommentIcon from '@mui/icons-material/AddComment';
import './AddOpinion.css'
import TextField from '@mui/material/TextField';

function AddOpinion() {
  return (
    <div className='addOpinion__wrappper'>
       <div className='addopinion__input__container'>
          <TextField multiline className="add__opinion__input"  variant="outlined" />
       </div>
       <div className='addOpinion__button__container'>
          <Button variant="contained">Dodaj opinie</Button>
       </div>
    </div>
  )
}

export default AddOpinion