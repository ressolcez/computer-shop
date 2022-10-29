import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import UsersServices from '../Services/UsersServices';

function ProfileComponent({userdata}) {

  const [errors,setErrors] = useState([])

  const formik = useFormik({
    initialValues: {
      name: userdata.name,
      surname: userdata.surname,
      address: userdata.address,
      houseNumber: userdata.houseNumber,
      postalCode: userdata.postalCode,
    },
    onSubmit: (values) => {

      console.log(values)

      UsersServices.changeUserDataByUser(userdata.id,values).then((response) => {

        console.log(response.data)

    }).catch((error) => {
      console.log(error.response.data)
      setErrors(error.response.data)
  })
    },
  });

  return (
    <div className = "div rounded bg-white">
    <div className="row">
        <div className="col-md-5 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
              <span className="font-weight-bold">{userdata.login}</span>
              <span className="text-black-50">{userdata.email}</span>
              <Button className='mt-2' variant="danger">Usuń Konto</Button>
            </div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Podstawowe dane: </h4>
                </div>
                <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="row mt-2">

                    <div className="col-md-6"><Form.Label>Imie</Form.Label>
                    <Form.Control
                      id= 'name' 
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {errors.name && <p style = {{marginBottom:'0',color:'red'}}>{errors.name}</p>}
                    </div>
                    <div className="col-md-6"><Form.Label>Nazwisko</Form.Label>
                    <Form.Control 
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    id='surname'
                    />
                    {errors.surname && <p style = {{marginBottom:'0',color:'red'}}>{errors.surname}</p>}
                    </div>

                    <div className="col-md-12"><Form.Label className="mt-3">Adres</Form.Label>
                    <Form.Control id = 'address' onChange={formik.handleChange} value={formik.values.address}/>
                    {errors.address && <p style = {{marginBottom:'0',color:'red'}}>{errors.address}</p>}
                    </div>

                    <div className="col-md-6"><Form.Label className="mt-3">Numer domu</Form.Label>
                    <Form.Control id = 'houseNumber' onChange={formik.handleChange} value={formik.values.houseNumber}/>
                    {errors.houseNumber && <p style = {{marginBottom:'0',color:'red'}}>{errors.houseNumber}</p>}
                    </ div>

                    <div className="col-md-6"><Form.Label className="mt-3">Kod pocztowy</Form.Label>
                    <Form.Control id = 'postalCode' onChange={formik.handleChange} value={formik.values.postalCode}/>
                    {errors.postalCode && <p style = {{marginBottom:'0',color:'red'}}>{errors.postalCode}</p>}
                    </div>

                    <div className="mt-3">
                      <Button className="float-end" type="submit" variant="success">Zapisz dane</ Button>
                    </div>

                </Form.Group>
                </Form>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Dane logowania: </h4>
                </div>
                <Form>
                <div className="row mt-3">

                    <div className="col-md-12">
                      <Form.Label className="mt-3">Nowe Hasło</Form.Label>
                      <Form.Control type = "password"/></ div>

                    <div className="col-md-12">
                      <Form.Label className="mt-3">Powtórz hasło</Form.Label>
                      <Form.Control type = "password"/></ div>
                </div>
                </Form>
                <div className="mt-3 text-center">
                  <Button className="float-end" type="Button" variant="success">Zapisz dane</ Button>
                </div>
            </ div>
        </div>
    </div>
  </div>
)
}

export default ProfileComponent