import React,{ useState } from 'react';
import "./ItemDetail.css"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
    {
      original: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_9_47_35_177_02.jpg',
      thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_9_47_35_177_02.jpg',
    },
    {
      original: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_10_22_54_927_06.jpg',
      thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_10_22_54_927_06.jpg',
    },
    {
      original: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_10_22_54_927_06.jpg',
      thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_10_22_54_927_06.jpg',
    },
  ];

function ItemDetail() {

  return (
    <div className='ItemDetail__wrapper'>
        <div className='ItemDetail__images__wrapper'>
        <ImageGallery items={images} />
        </div>
        <div className='ItemDetail__description_wrapper'> 

        <div className="product-description">
              <h1>name</h1>
              <p>desc</p>
            </div>
            <div className="product-price">
              <span>13123123 PLN</span>
              <btn className="cart-btn">Kup</btn>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail