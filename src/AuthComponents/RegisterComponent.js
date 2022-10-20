import React, { useState } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import Logo from "../Images/Logo.png"
import AuthServices from "../Services/AuthServices"

function RegisterComponent() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /*
  const registerUser = (e) => {
    const newUser = {name,surname,login,email,password,address}
    AuthServices.registerUser(newUser)
}

*/
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='13'>
        <div className="text-center">
              <img src={Logo}
                style={{marginTop:'2%'}} alt="logo" />
            </div>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h3 className="text-center">Rejestracja</h3>
              <p className="text-black-50 mb-3 text-center">Niepoprawne haslo</p>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Imie' id='name' type='text' onChange={(e) => setName(e.target.value)}/>
                </MDBCol>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Nazwisko' id='surname' type='text' onChange={(e) => setSurname(e.target.value)}/>
                </MDBCol>
              </MDBRow>            
              <MDBInput wrapperClass='mb-4 w-100' label='Nazwa Użytkownika' id='userName' type='text' size="lg" onChange={(e) => setLogin(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Adres Email' id='Email' type='text' size="lg" onChange={(e) => setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Hasło' id='Password' type="password" size="lg" onChange={(e) => setPassword(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Address' id='addresss' type='text' size="lg" onChange={(e) => setAddress(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Powtórz hasło' id='repeat_password' type="password" size="lg" onChange={(e) => setConfirmPassword(e.target.value)}/>
              <Button variant="contained">Zarejestruj</Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
  );
}

export default RegisterComponent;