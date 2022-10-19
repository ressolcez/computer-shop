import React,{useState, useEffect} from 'react';
import "./CategoryComponent.css"
import computer from "../Images/komputer2.jpg"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CategoryServices from '../Services/CategoryServices';
import Pagination from '@mui/material/Pagination';

function CategoryComponent() {

  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [manufacturerFilter, setManufacturerFilter] = useState([]);

  const [products, setProducts] = useState([]);

  const [minPrice, setMinprice] = useState(0);
  const [maxPrice, setMaxprice] = useState(10000);

  const [page, setPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };


  const handleCheckedCategory = (e, index,type) => {

    console.log(index)
    let prev;
    let itemIndex;

    if(type === 1){

    prev = categoriesFilter;
    itemIndex = prev.indexOf(index);

    if (itemIndex !== -1) {
      prev.splice(itemIndex, 1);
    } else {
      prev.push(index);
    }
    setCategoriesFilter([...prev]);
    
  }else{

    prev = manufacturerFilter;
    itemIndex = prev.indexOf(index);

    if (itemIndex !== -1) {
      prev.splice(itemIndex, 1);
    } else {
      prev.push(index);
    }
    setManufacturerFilter([...prev]);
  }
  };


  useEffect(() => {
       
      CategoryServices.getFilters(categoriesFilter,manufacturerFilter,minPrice,maxPrice,page-1).then((response) => {
        setTotalNumberOfPages(response.data.totalPages);
        setProducts(response.data.products);
      });

      
       
    }, [categoriesFilter,manufacturerFilter,minPrice,maxPrice,page]);


  return (
    <div className='category__wrapper'>
    <div className='category__filters__wrappper'>
        <div className='single__category__filters'>
            <div className='center__box'>
              <p className='title'>Kategorie:</p>
              <FormControlLabel control={<Checkbox size='small' onChange={(e) => handleCheckedCategory(e, 'komputery', 1)} />} label="Komputery" />
              <FormControlLabel control={<Checkbox size='small' onChange={(e) => handleCheckedCategory(e, 'myszki', 1)}/>} label="Myszki" />
              <FormControlLabel control={<Checkbox size='small' onChange={(e) => handleCheckedCategory(e, 'klawiatury',1)}/>} label="Klawiatury" />
              <FormControlLabel control={<Checkbox size='small' onChange={(e) => handleCheckedCategory(e, 'laptopy',1)}/>} label="Laptopty" />
            </div>
        </div>
        <div className='price__flters'>
            <div className='center__prices'>
                <p className='title'>Cena:</p>
                <div className='pricee'>
                  <input className='input__price' type = "number" onChange={(e) => setMinprice(e.target.value)}></input>- 
                  <input className='input__price' type = "number" onChange={(e) => setMaxprice(e.target.value)}></input>
                </div>
            </div>
        </div>
          <div className='product__detail__filters'>
          <div className='center__box'>
              <p className='title'>Producent:</p>
              <FormControlLabel control={<Checkbox size='small' onChange={(e) => handleCheckedCategory(e, 'xiaomi', 2)}/>} label="Xiaomi" />
              <FormControlLabel control={<Checkbox size='small' onChange={(e) => handleCheckedCategory(e, 'samsung', 2)}/>} label="Samsung" />
              <FormControlLabel control={<Checkbox size='small' onChange={(e) => handleCheckedCategory(e, 'asus', 2)}/>} label="Asus" />
              <FormControlLabel control={<Checkbox size='small' onChange={(e) => handleCheckedCategory(e, 'acer', 2)}/>} label="Acer" />
          </div>
        </div>

    </div>   
    <div className='category__product__wrappper'>
    {products.map((product)=>(
        <div className='single__product__wrapper'>
                <div className='img__container'>
                  <img src ={computer} alt = "productImage"></img>
                </div>
            <div className='title__container'>{product.name}</div>
            <div className='price__btn__container'>
              <div className='price__container'>{product.producent}</div>
              <div className='btn__container'>{product.price}</div>
            </div>
          </div>
    ))}
    </div>
    <div style={{display:'flex', justifyContent:'center', width: '100%'}}>
    <Pagination count={totalNumberOfPages} page={page} onChange={handlePageChange} size="large"  variant="outlined" />          

    </div>
    </div>
  )
}

export default CategoryComponent