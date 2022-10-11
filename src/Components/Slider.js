import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css"
import Komputer from "../Images/komputer2.jpg"


function Slider() {
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
        <div className='carousel__wrappper'>
            <div className='carousel__wrappper__image'>
                <img className='inside__img' src = {Komputer} alt = "computer"/>
            </div>
            <div className='carousel__wrapper__description'>
                <div className='carousel__wrapper__title'>
                    title
                </div>
                <div className='s'>
                    blablala
                </div>
            </div>
        </div>
        <div className='carousel__wrappper'>
            <div className='carousel__wrappper__image'>
                <img className='inside__img' src = {Komputer} alt = "computer"/>
            </div>
            <div className='carousel__wrapper__description'>
                <div className='carousel__wrapper__title'>
                    title
                </div>
                <div className='s'>
                    blablala
                </div>
            </div>
        </div>
        <div className='carousel__wrappper'>
            <div className='carousel__wrappper__image'>
                <img className='inside__img' src = {Komputer} alt = "computer"/>
            </div>
            <div className='carousel__wrapper__description'>
                <div className='carousel__wrapper__title'>
                    title
                </div>
                <div className='s'>
                    blablala
                </div>
            </div>
        </div>
        <div className='carousel__wrappper'>
            <div className='carousel__wrappper__image'>
                <img className='inside__img' src = {Komputer} alt = "computer"/>
            </div>
            <div className='carousel__wrapper__description'>
                <div className='carousel__wrapper__title'>
                    title
                </div>
                <div className='s'>
                    blablala
                </div>
            </div>
        </div>
</Carousel>
  )
}

export default Slider