import React from 'react';
import "./EditUserAccountComponent.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import StyledDivider from "../SharedComponent/StyledDivider";


function EditUserAccountComponent() {
  return (
    <div className='editUserAccountComponent__wrapper'>
      <h3>Dane użytkownika: </h3>
        <div className='edit__user__data'>
          <TextField className='name__input' label="Imie" variant="outlined" />
          <TextField className='surname__input' label="Nazwisko" variant="outlined" />
          <TextField className='email__input' label="Email" variant="outlined" />
          <div className='edit__button__container'>
            <Button variant="contained" color="success">
            Zmień
          </Button>
          </div>
        </div>
        <StyledDivider style = {{marginBottom:'2%'}}/>
        <div className='edit__user__login__data'>
          <TextField className='login__input' label="Login" variant="outlined" />
          <TextField className='password__input' label="Hasło" variant="outlined" />
          <TextField className='confirmPassword__input' label="Potwierdź hasło" variant="outlined" />
          <div className='edit__button__container'>
            <Button variant="contained" color="success">
            Zmień
          </Button>
          </div>
        </div>
        <StyledDivider/>
    </div>
  )
}

export default EditUserAccountComponent