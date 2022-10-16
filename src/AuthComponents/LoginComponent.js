import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';

import Logo from "../Images/Logo.png"
import AuthServices from "../Services/AuthServices"


function LoginComponent() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

   const loginUser = () => {
      AuthServices.loginUser(login,password)
      .then(response => response.json())   
        .then( json => {
          if(json.token !== -1){
            localStorage.setItem('token', json.token);
          }
      } 
      ).catch(error => {
          console.log(error);
        });
  }

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='13'>
        <div className="text-center">
              <img src={Logo}
                style={{marginTop:'7%'}} alt="logo" />
            </div>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h3 className="text-center">Zaloguj</h3>
              <p className="text-black-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Nazwa użytkownika' type='login' size="lg" onChange={(e) => setLogin(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Hasło' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}/>

              <p className="text-center">Nie masz konta? <a href="#!">Zarejestruj</a></p>

              <MDBBtn size='lg' onClick = {(e) => loginUser(e)}>
                Login
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LoginComponent;