import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import OrdersServices from "../Services/OrderServices";

function EditOrderModal({openModal,handleCloseModal,order}) {

    const [orderStatus, setOrderStatus] = useState('');

    const changeStatus = () => {
        OrdersServices.changeOrderStatus(order.id,orderStatus).then((response) => {
            console.log(response.data)
        })
    }

  return (
    <div>
      <>
        <Modal  show={openModal} onHide={handleCloseModal}>
            <Modal.Header >
                <Modal.Title>Edytowanie Zamówienia numer {order.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Label className='pt-3' style = {{display:'flex', justifyContent:'center',fontSize:'20px'}}>Aktualny status zamówienia</Form.Label>
                 <Container>
                    <p style = {{display:'flex', justifyContent:'center'}}>{order.status}</p>
                </Container> 
            <Form.Label className='pt-3'>Wybierz status zamówienia:</Form.Label>
                 <Form.Select onChange={e => {
                  setOrderStatus(e.target.value);
                  }}>
                    <option value="W trakcie realizacji">W trakcie realizacji</option>
                    <option value="Zrealizowano">Zrealizowano</option>
                    <option value="Anulowano">Anulowano</option>
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" type = "submit" onClick = {()=>changeStatus()}>
                Zmień status
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}

export default EditOrderModal