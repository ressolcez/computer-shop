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
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Logo from "../Images/Logo.png"
import AuthServices from "../Services/AuthServices"
import "./LoginComponent.css";

function LoginComponent() {

  const [login, setLogin] = useState('');
  const [loginInfo, setLoginInfo] = useState('correct__info');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


const loginUser = () => {
      const credential = {login,password}

      AuthServices.loginUser(credential).then((response) => {
        if(response.data.token !== '-1'){
          localStorage.setItem('token',response.data.token);
          navigate('/', {replace: true});
        }else{
          setLoginInfo('incorret__info');
        }
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
              <p className={loginInfo}>Login lub hasło są niepoprawne!</p>
              <MDBInput wrapperClass='mb-4 w-100' label='Nazwa użytkownika' type='login' size="lg" onChange={(e) => setLogin(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Hasło' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}/>
              <p className="text-center">Nie masz konta? <a href="#!">Zarejestruj</a></p>
              <Button onClick={()=>loginUser()} variant="contained">Login</Button>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LoginComponent;