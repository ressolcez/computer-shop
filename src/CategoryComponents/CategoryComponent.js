import React,{useState, useEffect} from 'react';
import "./CategoryComponent.css"
import computer from "../Images/komputer2.jpg"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CategoryServices from '../Services/CategoryServices';

function CategoryComponent() {

  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [products, setProducts] = useState([]);

  const handleChecked = (e, index) => {

    console.log(index)

    let prev = categoriesFilter;
    let itemIndex = prev.indexOf(index);

    if (itemIndex !== -1) {
      prev.splice(itemIndex, 1);
    } else {
      prev.push(index);
    }
    setCategoriesFilter([...prev]);
  };

  useEffect(() => {
       
      CategoryServices.getFilters(categoriesFilter).then((response) => {
        setProducts(response.data.products);
      });
       
    }, [categoriesFilter]);


  return (
    <div className='category__wrapper'>
    <div className='category__filters__wrappper'>
        <div className='single__category__filters'>
            <div className='center__box'>
              <p className='title'>Kategorie:</p>
              <FormControlLabel control={<Checkbox value = "komp"size='small' onChange={(e) => handleChecked(e, 'komputery')} />} label="Komputery" />
              <FormControlLabel control={<Checkbox value = "myszki" size='small' onChange={(e) => handleChecked(e, 'myszki')}/>} label="Myszki" />
              <FormControlLabel control={<Checkbox size='small' onChange={(e) => handleChecked(e, 'klawiatury')}/>} label="Klawiatury" />
              <FormControlLabel control={<Checkbox size='small' onChange={(e) => handleChecked(e, 'laptopy')}/>} label="Laptopty" />
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
              <FormControlLabel control={<Checkbox size='small'/>} label="Xiaomi" />
              <FormControlLabel control={<Checkbox size='small'/>} label="Samsung" />
              <FormControlLabel control={<Checkbox size='small'/>} label="Nokia" />
              <FormControlLabel control={<Checkbox size='small'/>} label="Acer" />
          </div>
        </div>

    </div>   
    <div className='category__product__wrappper'>
    {products.map((product)=>(
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
    ))}          
    </div>
    </div>
  )
}

export default CategoryComponent