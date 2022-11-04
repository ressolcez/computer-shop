import React,{useState,useEffect} from 'react';
import {useCart} from "react-use-cart";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StyledDivider from '../SharedComponent/StyledDivider';
import OrderServices from '../Services/OrderServices';
import "./CreateOrderComponent.css"
import { useFormik } from 'formik';
import {useNavigate} from "react-router-dom"
import CreateOrderSuccessModal from '../SharedComponent/CreateOrderSuccessModal';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CartModalFail from '../SharedComponent/CartModalFail';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import StyledLink from '../SharedComponent/StyledLink';

function CreateOrder({user,userdata}) {

  const { items,cartTotal,totalItems,emptyCart  } = useCart();
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  const [errors,setErrors] = useState([])
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const [openModalFail, setOpenModalFail] = useState(false);
  const handleCloseModalFail = () => setOpenModalFail(false);
  const [accpetStatute, setAcceptStatute] = useState(false);


  const [openBackdrop, setOpenBackdrop] = useState(false);

  useEffect(() => {

   if(items.length === 0){
      navigate("/cart")
   }

 }, []);

  const formik = useFormik({
    initialValues: {
      name: userdata.name,
      surname: userdata.surname,
      address: userdata.address,
      houseNumber: userdata.houseNumber,
      postalCode: userdata.postalCode,
    },
    onSubmit: (values) => {

      if(!accpetStatute){

        setMsg("Musisz zaakceptować regulamin sklepu!")
        setOpenModalFail(true);

      }else{
      
        OrderServices.checkoutCart(items).then((response) => {
          setOpenBackdrop(true)
          OrderServices.addOrder(user.userId,values,cartTotal).then((response) => {
            items.map((product)=>(
              OrderServices.addOrderProduct(response.data,product.id, product.quantity).then((response) => {
                  setOpenBackdrop(false);
                  setErrors([]);
                  emptyCart();
                  formik.resetForm();
                  setOpenModal(true)
              })
            ))
          }).catch((error) => {
            setErrors(error.response.data)
          })

      }).catch((error) => {
        setMsg('Nie posiadamy wystarczającej ilości przedmiotów w magazynie')
        setOpenModalFail(true);
      })
      
  }
  },
});

  return (
    <>
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
                        <FormControlLabel style = {{display:'flex', justifyContent:'flex-end', margin:'0', padding:'0', paddingRight:'5px'}} 
                        control={<Checkbox 
                        alue = {accpetStatute} 
                        onChange = {()=>setAcceptStatute(!accpetStatute)}/>} 
                        label="Akceptuje regulamin sklepu" />
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <CreateOrderSuccessModal openModal = {openModal} handleCloseModal = {handleCloseModal}/>
      <CartModalFail msg={msg} openModal = {openModalFail} handleCloseModal = {handleCloseModalFail}/>
    </>
  )
}

export default CreateOrder