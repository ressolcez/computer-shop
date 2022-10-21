import React from 'react';
import './SingleCartItem.css';
import Button from '@mui/material/Button';

function SingleCartItem({product}) {
  return (
            <div className='single__item__wrapper'>
            <div className = 'item__image__description'>
                <div className='item__image'>
                    <img className='image__cart__product' src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>

                </div>
                <div className='item__description__cart'>
                    <p className='name__style'><b>Nazwa: </b> {product.name} </p>
                    <p><b>Kategoria: </b> {product.categoryModel.name} </p>
                    <p><b>Producent: </b> {product.producent} </p>
                </div>
            </div>
            <div className='item__control__price'>
                <div className='control'>
                    <div className='items__control'>
                    <Button style={{minWidth:'20px', marginRight:'5px'}} variant="contained" color = "success">+</Button> 0 <Button style={{minWidth:'20px', marginLeft:'5px'}} variant="contained" color = "success">-</Button>
                    </div>
                </div>
                <div className='price'>
                    PLN 200
                </div>
            </div>
        </div>  
  )
}

export default SingleCartItem