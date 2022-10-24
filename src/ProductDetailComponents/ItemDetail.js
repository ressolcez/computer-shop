import React,{useState} from 'react';
import {useCart} from "react-use-cart";
import ImageGallery from 'react-image-gallery';
import SnackbarSuccess from '../SharedComponent/SnackbarSuccess';
import "react-image-gallery/styles/css/image-gallery.css";
import "./ItemDetail.css";


function ItemDetail({product}) {

  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const {addItem} = useCart();

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
      original: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_9_47_35_177_02.jpg',
      thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_9_47_35_177_02.jpg',
    },
    {
      original: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_10_22_54_927_06.jpg',
      thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_10_22_54_927_06.jpg',
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