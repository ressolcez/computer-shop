import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Rating from "@mui/material/Rating";
import StyledLink from '../SharedComponent/StyledLink';
import SnackbarSuccess from '../SharedComponent/SnackbarSuccess';
import OpinionsService from '../Services/OpinionsService';
import "./MostOrderProduct.css";

function MostOrderProduct({product}) {

    const [opinionsRate ,setOpinionsRate] = useState([]);
    const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);

    useEffect(() => {
        OpinionsService.getOpinionToProductRate(product.id).then((response) => {
          setOpinionsRate(response.data);
          });
    }, []);

    const handleAddToCart = () =>{
        setOpenSnackbarSuccess(true);
      }
  
      const handleCloseSnackbarSuccess = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackbarSuccess(false);
      };

  return (
    <>
        <div className='MostOrderProduct__wrapper' key={product.id}>
            <StyledLink to={"/"+product.categoryModel.name+"/"+product.id}>
                <div className='img__container'>
                    <img src = {require('../Images/komputer5.jpg')} alt = "productImage"></img>
                </div>
            </StyledLink>
            <div className='title__container'>{product.name}</div>
            <div className='stars__container__order'><Rating value={parseFloat(opinionsRate.finalRate)} readOnly precision={0.5} size="small"/></div>
            <div className='price__btn__container__order'>
            <div className='price__container__order'>{product.price} PLN</div>
            <div className='btn__container'>
            <Button variant="contained" style = {{paddingTop: '2px', paddingBottom:'2px'}} color="success" onClick={()=> handleAddToCart()}>
                <AddShoppingCart style ={{width:'20px'}} />
            </Button>
            </div>
        </div>
        </div>
        <SnackbarSuccess openSnackbarSuccess = {openSnackbarSuccess} handleCloseSnackbarSuccess = {handleCloseSnackbarSuccess} message = "Dodano do koszyka"/>
    </>
  )
}

export default MostOrderProduct