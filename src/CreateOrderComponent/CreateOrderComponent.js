import React,{useState} from 'react';
import {useCart} from "react-use-cart";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StyledDivider from '../SharedComponent/StyledDivider';
import OrderServices from '../Services/OrderServices';
import "./CreateOrderComponent.css"
import { useFormik } from 'formik';

function CreateOrder({user,userdata}) {

  const { items,cartTotal,totalItems,emptyCart  } = useCart();
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
      OrderServices.addOrder(user.userId,values,cartTotal).then((response) => {

        items.map((product)=>(
          OrderServices.addOrderProduct(response.data,product.id, product.quantity).then((response) => {
              console.log(response.data)
              setErrors([]);
              emptyCart();
              formik.resetForm();
          })
        ))
      }).catch((error) => {
        setErrors(error.response.data)
      })
    },
  });

  return (
    <>
      <div className="d-flex flex-column align-items-center text-center">
        <img className="rounded-circle mt-5" width="100px" src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"/>
        <span className="font-weight-bold">{userdata.login}</span>
        <span className="text-black-50">{userdata.email}</span>
  </div>
    <div className='createOrderComponent__wrappper'>
    <div className="payment__data col-md-5 border-right">
    <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Dane do zamówienia: </h4>
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
                      <Button className="float-end" type="submit" variant="success">Zrealizuj zamówienie</ Button>
                    </div>

                </Form.Group>
                </Form>
      </div>
    </div>
      <div className='cart__info__wrapper p-3 py-5'>
      <h4 className="text-right">Koszyk({totalItems}) </h4>
          <div className='cart__info__items__wrapper'>
          {items.map((product)=>(        
              <div className='cart__info__single__item'>
                <div className='cart__info__product__name'>
                  <div>
                    <span style= {{fontWeight:'600',fontSize:'18px'}}>{product.name}</span>
                    <p style = {{display:'flex',justifyContent:'center',marginBottom:'0',fontSize:'12px'}}>{product.categoryModel.categoryName}</p>
                  </div>
                </div>
                <div className='cart__info__product__price'>
                  <div>
                    <span style = {{fontWeight:'300',fontSize:'18px'}}>{product.price} PLN</span>
                    <p style = {{display:'flex',justifyContent:'center',marginBottom:'0',fontSize:'16px'}}>x{product.quantity}</p>
                  </div>
                </div>
                <div style = {{width:'100%'}}>
                <StyledDivider/>
                </div>
              </div>
              ))}
            <div className='total__info__cart'>
              <p style= {{fontWeight:'500',fontSize:'18px'}}>Całkowita Cena: </p>
              <p style = {{fontWeight:'300',fontSize:'18px'}}>{cartTotal} PLN</p>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default CreateOrder