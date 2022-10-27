import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ProductServices from '../Services/ProductServices';

function AddProductModal({openModal,handleCloseModal}) {

    const [name,setName] = useState('');
    const [slider,setSlider] = useState(true);
    const [producent,setProducent] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState('');
    const [price,setPrice] = useState(10000);
    const [category,setCategory] = useState(1);
    const [errors,setErrors] = useState([]);

    const addProduct = () =>{
        const product = {name,slider,producent,description,image,price};
        ProductServices.addProduct(category,product).then((response) => {
            window.location.reload(false);
        }).catch((error) => {
          setErrors(error.response.data.errors)
      })
    }

    return (
        <>
        <Modal show={openModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Dodawanie Produktu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                {errors && errors.map((error)=>(
                <div style = {{display:'flex', justifyContent:'center',color:'red',padding:'5px',fontSize:'18px'}}>
                  {error}
                </div>
                ))}
                <Form.Label>Nazwa</Form.Label>
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
            <Button variant="success" onClick={() => addProduct()}>
              Dodaj Produkt
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default AddProductModal