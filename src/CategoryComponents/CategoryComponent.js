import React,{useState, useEffect} from 'react';
import {useCart} from "react-use-cart";
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import computer from "../Images/komputer2.jpg";
import StyledLink from '../SharedComponent/StyledLink';
import CategoryServices from '../Services/CategoryServices';
import SnackbarSuccess from "../SharedComponent/SnackbarSuccess";
import "./CategoryComponent.css"

function CategoryComponent() {

  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [manufacturerFilter, setManufacturerFilter] = useState([]);
  const [products, setProducts] = useState([]);
  const [minPrice, setMinprice] = useState(0);
  const [maxPrice, setMaxprice] = useState(10000);
  const [page, setPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const {addItem} = useCart();


  useEffect(() => {
    CategoryServices.getFilters(categoriesFilter,manufacturerFilter,minPrice,maxPrice,page-1).then((response) => {
      setTotalNumberOfPages(response.data.totalPages);
      setProducts(response.data.products);
    });

  }, [categoriesFilter,manufacturerFilter,minPrice,maxPrice,page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleCheckedCategory = (e, index,type) => {
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

    const handleAddToCart = (product) =>{
      addItem(product);
      setOpenSnackbarSuccess(true);
    }

    const handleCloseSnackbarSuccess = (reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbarSuccess(false);
    };

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
    {products.length !== 0  &&
    <>
    <div className='category__product__wrappper'>
        {products.map((product)=>(
            <div className='single__product__wrapper__category'>
                    <div className='img__container__category'>
                      <StyledLink to={"/"+product.categoryModel.name+"/"+product.id}>
                        <img src ={computer} alt = "productImage"/>
                      </StyledLink>
                    </div>
                <div className='title__container__category'>{product.name}</div>
                <div className='product__category__container'><b>Kategoria: </b>{product.categoryModel.name} </div>
                <div className='manufacturer__container'><b>Producent: </b>{product.producent} </div>
                <div className='price__btn__container__category'>
                  <div className='price__container__category'>{product.price} PLN</div>
                  <div className='btn__container__category'>
                  <Button variant="contained" style = {{paddingTop: '2px', paddingBottom:'2px'}} color="success" onClick={()=> handleAddToCart(product)}>
                    <AddShoppingCart style ={{width:'20px'}} />
                  </Button>
                  </div>
                </div>
              </div>
        ))}
    </div>
  
      <div className='pagination__container'>
        <Pagination count={totalNumberOfPages} page={page} onChange={handlePageChange} size="large"  variant="outlined" />         
      </div>
    </>
    }
    <SnackbarSuccess openSnackbarSuccess = {openSnackbarSuccess} handleCloseSnackbarSuccess = {handleCloseSnackbarSuccess} message = "Dodano do koszyka"/>
    </div>
  )
}

export default CategoryComponent