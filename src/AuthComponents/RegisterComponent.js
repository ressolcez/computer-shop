import React from 'react';
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

function RegisterComponent() {
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
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>
             
              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='Login' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Hasło' id='formControlLg' type='Haslo' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Powtórz hasło' id='formControlLg' type='Haslo' size="lg"/>

              <MDBBtn size='lg'>
                Zarejestruj
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default RegisterComponent;