import React, { useState } from 'react';
import './RegisterComponent.css'
import Button from '@mui/material/Button';
import Logo from "../Images/Logo.png"
import AuthServices from "../Services/AuthServices";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import validationSchema from '../SharedComponent/validations/newUserValidations';

function RegisterComponent() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmpassword: '',
      name: '',
      surname: '',
      login: '',
      password: '',
      address: '',
      housenumber: '',
      postalCode: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let email = values.email;
      let name = values.name;
      let surname = values.surname;
      let login = values.login;
      let password = values.password;
      let address = values.address;
      let housenumber = values.housenumber;
      let postalCode = values.postalCode;

      const newUser = {email,name,surname,login,password,address,housenumber,postalCode}

      AuthServices.registerUser(newUser);
      
    },
  });

  return (
   <div className='register__wrapper'>
      <div className='register__conent'>
          <div className='register__image'>
            <img src = {Logo} alt = 'logo'/>
          </div>
          <div className='register__input'>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id = "name"
              label="Imie*"
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              style = {{width:'48%',marginTop:'40px'}}
            />
              <TextField
              id = "surname"
              label="Nazwisko*"
              onChange={formik.handleChange}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
              style = {{width:'48%',marginTop:'40px',marginLeft:'4%'}}
            />
            <TextField
              id="email"
              label="Email*"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              style = {{width:'100%',marginTop:'40px'}}
            />
              <TextField
              id = "login"
              label="Login*"
              onChange={formik.handleChange}
              error={formik.touched.login && Boolean(formik.errors.login)}
              helperText={formik.touched.login && formik.errors.login}
              style = {{width:'100%',marginTop:'40px'}}
            />
              <TextField
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              type = 'password'
              label="Hasło*"
              style = {{width:'100%',marginTop:'40px'}}
            />
              <TextField
              id = "confirmpassword"
              onChange={formik.handleChange}
              error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
              helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
              type = "password"
              label="Potwierdź hasło*"
              style = {{width:'100%',marginTop:'40px'}}
            />
              <TextField
              id = "address"
              label="Adres Zamieszkania"
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              style = {{width:'100%',marginTop:'40px'}}
            />
             <TextField
              id="housenumber"
              onChange={formik.handleChange}
              error={formik.touched.housenumber && Boolean(formik.errors.housenumber)}
              helperText={formik.touched.housenumber && formik.errors.housenumber}
              label="Numer domu"
              style = {{width:'48%',marginTop:'40px'}}
            />
            <TextField
              id ="postalCode"
              onChange={formik.handleChange}
              error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
              helperText={formik.touched.postalCode && formik.errors.postalCode}
              label="Kod pocztowy"
              style = {{width:'48%',marginTop:'40px',marginLeft:'4%'}}
            />
            <div className='register__btn__cont'>
              <Button variant = 'contained' color = 'success' style= {{width:'60%',height:'45px'}} type="submit">
                Zarejestruj
              </Button>
            </div>
            </form>
          </div>
      </div>
   </div>
  );
}

export default RegisterComponent;