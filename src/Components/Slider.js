import React from 'react';
import Carousel from "react-multi-carousel";
import Komputer from "../Images/komputer2.jpg";
import StyledLink from '../SharedComponent/StyledLink';
import "./Slider.css";
import "react-multi-carousel/lib/styles.css";

function Slider({products}) {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <Carousel responsive={responsive}>
         {products.map((product)=>(
          <div key={product.id} className='carousel__wrappper'>
              <div className='carousel__wrappper__image'>
              <StyledLink to={"/"+product.categoryModel.name+"/"+product.id}>
                  <img className='inside__img' src = {Komputer} alt = "computer"/>
              </StyledLink>
              </div>
            <div className='carousel__wrapper__description'>
                <div className='carousel__wrapper__title'>
                    {product.name}
                </div>
                <div>
                    {product.description}
                </div>
            </div>
        </div>
        ))}
    </Carousel>
  )
}

export default Slider