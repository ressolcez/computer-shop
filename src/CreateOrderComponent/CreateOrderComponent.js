import React from 'react'
import "./CreateOrderComponent.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StyledDivider from '../SharedComponent/StyledDivider';

function CreateOrder() {
  return (
    <div className='createOrderComponent__wrappper'>
    <div className="payment__data col-md-5 border-right">
    <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Dane do zamówienia: </h4>
        </div>
        <Form >
        <Form.Group className="row mt-2">
            <div className="col-md-6"><Form.Label>Imie</Form.Label>
            <Form.Control
              id= 'name' 
            />
            </div>
            <div className="col-md-6"><Form.Label>Nazwisko</Form.Label>
            <Form.Control 
            id='surname'
            />
            </div>
            <div className="col-md-12"><Form.Label className="mt-3">Adres</Form.Label>
            <Form.Control id = 'address' />
            </div>
            <div className="col-md-6"><Form.Label className="mt-3">Numer domu</Form.Label>
            <Form.Control id = 'houseNumber' />
            </ div>

            <div className="col-md-6"><Form.Label className="mt-3">Kod pocztowy</Form.Label>
            <Form.Control id = 'postalCode' />
            </div>
            <div className="mt-3">
              <Button className="float-end" type="submit" variant="success">Zrealizuj zamówienie</ Button>
            </div>
        </Form.Group>
        </Form>
    </div>
</div>
<div className='cart__info__wrapper p-3 py-5'>
<h4 className="text-right">Koszyk(5) </h4>
  <div className='cart__info__items__wrapper'>
    <div className='cart__info__single__item'>
      <div className='cart__info__product__name'>
      Komputer x521 af3 c
      </div>
      <div className='cart__info__product__price'>
      2800 PLN
      </div>
      <div style = {{width:'100%'}}>
      <StyledDivider/>
      </div>
    </div>
    <span className='total__info__span'>Total:</span>
  </div>
</div>
</div>
  )
}

export default CreateOrder