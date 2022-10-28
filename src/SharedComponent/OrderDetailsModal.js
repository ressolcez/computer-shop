import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import computer from "../Images/komputer2.jpg";
import StyledDivider from './StyledDivider';
import Form from 'react-bootstrap/Form';
import StyledLink from "./StyledLink";
import "./OrderDetailsModal.css";

function OrderDetailsModal({openModal,handleCloseModal,order }) {
  return (
    <>
    <Modal className='modal-lg' show={openModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Zamówienie numer {order.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {order.orderProductModels.map((order)=>(
        <div className='single__productInOrder__wrappper__admin'>
            <div className='single__product__image__admin'>
              <img src = {computer} alt = "komputer img"/>
        </div>
              <div className='single__product__name__admin'>
                <b>Nazwa:</b>
                    {order.productModel.name}
                  </div>
                  <div className='single__product__quantity__admin'>
                    <b>Ilość:</b>
                     {order.quantity}
                  </div>
                  <div className='single__product__price__admin'>
                    <b>Cena:</b>
                      {order.productModel.price}
                  </div>
                  <div style={{width:'100%',marginTop:'5px',marginBottom:'5px'}}>
                  <StyledDivider/>
                  </div>
              </div>
      ))}
      </Modal.Body>
    </Modal>
  </>
  )
}

export default OrderDetailsModal