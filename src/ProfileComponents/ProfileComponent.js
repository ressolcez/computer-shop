import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ProfileComponent({userdata}) {

  return (
    <Container className = "container rounded bg-white">
    <Container className="row">
        <Container className="col-md-5 border-right">
            <Container className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
              <span className="font-weight-bold">{userdata.login}</span>
              <span className="text-black-50">{userdata.email}</span>
              <Button className='mt-2' variant="danger">Usuń Konto</Button>
            </Container>
        </Container>
        <Container className="col-md-5 border-right">
            <Container className="p-3 py-5">
                <Container className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Podstawowe dane: </h4>
                </Container>
                <Form>
                <Container className="row mt-2">
                    <Container className="col-md-6"><Form.Label>Imie</Form.Label>
                    <Form.Control value={userdata.name}/>
                    </Container>
                    
                    <Container className="col-md-6"><Form.Label>Nazwisko</Form.Label>
                    <Form.Control value={userdata.surname}/></Container>

                    <Container className="col-md-12"><Form.Label className="mt-3">Adres</Form.Label>
                    <Form.Control value={userdata.address}/></Container>

                    <Container className="col-md-6"><Form.Label className="mt-3">Numer domu</Form.Label>
                    <Form.Control value={userdata.houseNumber}/></ Container>

                    <Container className="col-md-6"><Form.Label className="mt-3">Kod pocztowy</Form.Label>
                    <Form.Control value={userdata.postalCode}/></ Container>

                    <Container className="mt-3">
                      <Button className="float-end" type=" Button" variant="success">Zapisz dane</ Button>
                      </Container>
                </Container>
                </Form>
                <Container className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Dane logowania: </h4>
                </Container>
                <Form>
                <Container className="row mt-3">
                    < Container className="col-md-12">
                      <Form.Label>Stare hasło</Form.Label>
                      <Form.Control type = "password"/></ Container>

                    <Container className="col-md-12">
                      <Form.Label className="mt-3">Nowe Hasło</Form.Label>
                      <Form.Control type = "password"/></ Container>

                    <Container className="col-md-12">
                      <Form.Label className="mt-3">Powtórz hasło</Form.Label>
                      <Form.Control type = "password"/></ Container>
                </Container>
                </Form>
                <Container className="mt-3 text-center">
                  <Button className="float-end" type="Button" variant="success">Zapisz dane</ Button>
                </Container>
            </ Container>
        </Container>
    </Container>
  </Container>
)
}

export default ProfileComponent