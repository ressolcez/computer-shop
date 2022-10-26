import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ProductServices from '../Services/ProductServices';

function EditProductModal({openModal,handleCloseModal,id}) {

    const [name,setName] = useState('');
    const [slider,setSlider] = useState(true);
    const [producent,setProducent] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState('');
    const [price,setPrice] = useState(10000);
    const [category,setCategory] = useState(1);

    const editProduct = () =>{
        const product = {name,slider,producent,description,image,price};
        ProductServices.editProduct(category,id,product).then((response) => {
        window.location.reload(false);
        });
        handleCloseModal();
    }

    return (
        <>
        <Modal show={openModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edytowanie Produktu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Identyfikator</Form.Label>
                <Form.Control
                  autoFocus
                  disabled
                  value = {id}
                />
                <Form.Label className='pt-3'>Nazwa</Form.Label>
                <Form.Control
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Label className='pt-3'>Slider</Form.Label>
                 <Form.Select aria-label="Default select example"
                  onChange={(e) => setSlider(e.target.value)}
                 >
                    <option value="true">true</option>
                    <option value="false">false</option>
                </Form.Select>
                <Form.Label className='pt-3'>Producent</Form.Label>
                <Form.Control
                  autoFocus
                  onChange={(e) => setProducent(e.target.value)}
                />
                 <Form.Label className='pt-3'>Opis</Form.Label>
                <Form.Control
                  autoFocus
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Label className='pt-3'>Zdjęcie</Form.Label>
                <Form.Control
                  autoFocus
                  onChange={(e) => setImage(e.target.value)}
                />
                <Form.Label className='pt-3'>Cena</Form.Label>
                <Form.Control
                  autoFocus
                  onChange={(e) => setPrice(e.target.value)}
                />
                 <Form.Label className='pt-3'>Kategoria</Form.Label>
                 <Form.Select aria-label="Default select example"
                  onChange={(e) => setCategory(e.target.value)}
                 >
                    <option value="1">komputery</option>
                    <option value="2">laptopy</option>
                    <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => editProduct()}>
              Edytuj Produkt
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default EditProductModal