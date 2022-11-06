import React from 'react';
import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import AuthServices from '../Services/AuthServices';
import UsersServices from '../Services/UsersServices';

function EditOrderModal({openModal,handleCloseModal,user}) {

    const deleteUserAccount = () =>{
        AuthServices.logoutUser();
        UsersServices.deleteUser(user.id);
        window.location.reload(false);
    }

  return (
        <Modal style = {{marginTop:'20%'}}  show={openModal} onHide={handleCloseModal}>
            <Modal.Body>
                <div style = {{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <p style = {{fontWeight:'700', fontSize:'20px'}}>Jesteś pewny, że chcesz usunąć konto?</p>
                    <div style = {{display:'flex', width:'100%', justifyContent:'center', gap:'30px'}}>
                        <Button onClick = {() => deleteUserAccount()}variant='contained' color = "success">Tak</Button>
                        <Button onClick = {() => handleCloseModal()} variant='contained' color = "error">Nie</Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
  )
}

export default EditOrderModal