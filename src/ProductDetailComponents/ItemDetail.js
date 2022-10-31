import React,{useState} from 'react';
import {useCart} from "react-use-cart";
import ImageGallery from 'react-image-gallery';
import SnackbarSuccess from '../SharedComponent/SnackbarSuccess';
import "react-image-gallery/styles/css/image-gallery.css";
import Image from  "../Images/laptop1.jpg"
import "./ItemDetail.css";


function ItemDetail({product}) {

  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const {addItem} = useCart();
  const [imageSrc, setImageSrc] = useState('');

  /*
  if(product.length !== 0){

    import("../Images/" + product.image).then((module) => {
      setImageSrc(module.default);
    });

  }

  */
  const handleAddToCart = () =>{
    addItem(product);
    setOpenSnackbarSuccess(true);
  }

  const handleCloseSnackbarSuccess = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbarSuccess(false);
  };

  const images = [
    {
      original: imageSrc,
      thumbnail: imageSrc,
    },
    {
      original: imageSrc,
      thumbnail: imageSrc,
    },
  ];

  return (
    <div className='ItemDetail__wrapper'>
        <div className='ItemDetail__images__wrapper'>
        <ImageGallery items={images} showPlayButton = {false}/>
        </div>
        <div className='ItemDetail__description_wrapper'> 
        <div className="product-description">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
            <div className="product-price">
              <span>{product.price} zł</span>
              <p className="cart-btn" onClick={()=> handleAddToCart()}>Kup</p>
            </div>
        </div>
        <SnackbarSuccess openSnackbarSuccess = {openSnackbarSuccess} handleCloseSnackbarSuccess = {handleCloseSnackbarSuccess} message = "Dodano do koszyka"/>
    </div>
  )
}

export default ItemDetail