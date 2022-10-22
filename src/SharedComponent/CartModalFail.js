import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./CartModalFail.css"

function CartModalFail({openModal,handleCloseModal}) {
  
  return (
    <div>
        <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box className='modal__wrapper'>
            <Typography variant="h6" component="h2">
                Błąd podczas zamówienia
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Zaloguj się aby zrealizować zamówienie
            </Typography>
        </Box>
        </Modal>
  </div>
  )
}

export default CartModalFail