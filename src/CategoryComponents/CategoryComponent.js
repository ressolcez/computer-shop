import React from 'react';
import "./CategoryComponent.css"
import computer from "../Images/komputer2.jpg"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

function CategoryComponent() {
  return (
    <div className='category__wrapper'>
    <div className='category__filters__wrappper'>
        <div className='single__category__filters'>
            <div className='center__box'>
              <p className='title'>Kategorie:</p>
              <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="Komputery" />
              <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="Myszki" />
              <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="Klawiatury" />
              <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="Laptopty" />
            </div>
        </div>
        <div className='price__flters'>
            <div className='center__prices'>
                <p className='title'>Cena:</p>
                <div className='pricee'>
                  <input className='input__price' type = "text" ></input>- 
                  <input className='input__price' type = "text" ></input>
                </div>
            </div>
        </div>
          <div className='product__detail__filters'>
          <div className='center__box'>
              <p className='title'>Producent:</p>
              <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="Xiaomi" />
              <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="Samsung" />
              <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="Nokia" />
              <FormControlLabel control={<Checkbox defaultChecked size='small'/>} label="Acer" />
          </div>
        </div>

    </div>   
    <div className='category__product__wrappper'>
        <div className='single__product__wrapper'>
                <div className='img__container'>
                  <img src ={computer} alt = "productImage"></img>
                </div>
            <div className='title__container'>Sluchawki hehe</div>
            <div className='price__btn__container'>
              <div className='price__container'>asd</div>
              <div className='btn__container'>asd</div>
            </div>
          </div>
          <div className='single__product__wrapper'>
                <div className='img__container'>
                  <img src ={computer} alt = "productImage"></img>
                </div>
            <div className='title__container'>Sluchawki hehe</div>
            <div className='price__btn__container'>
              <div className='price__container'>asd</div>
              <div className='btn__container'>asd</div>
            </div>
          </div>
          <div className='single__product__wrapper'>
                <div className='img__container'>
                  <img src ={computer} alt = "productImage"></img>
                </div>
            <div className='title__container'>Sluchawki hehe</div>
            <div className='price__btn__container'>
              <div className='price__container'>asd</div>
              <div className='btn__container'>asd</div>
            </div>
          </div>
          <div className='single__product__wrapper'>
                <div className='img__container'>
                  <img src ={computer} alt = "productImage"></img>
                </div>
            <div className='title__container'>Sluchawki hehe</div>
            <div className='price__btn__container'>
              <div className='price__container'>asd</div>
              <div className='btn__container'>asd</div>
            </div>
          </div>
          <div className='single__product__wrapper'>
                <div className='img__container'>
                  <img src ={computer} alt = "productImage"></img>
                </div>
            <div className='title__container'>Sluchawki hehe</div>
            <div className='price__btn__container'>
              <div className='price__container'>asd</div>
              <div className='btn__container'>asd</div>
            </div>
          </div>
          
    </div>
    </div>
  )
}

export default CategoryComponent