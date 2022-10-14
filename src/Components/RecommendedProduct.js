import React, {useState, useEffect} from 'react'
import "./RecommendedProduct.css"
import Rating from "@mui/material/Rating";
import computer from "../Images/komputer2.jpg"
import HomePageServices from '../Services/HomePageServices';

function RecommendedProduct({product}) {

    const [opinions ,setOpinions] = useState([])


    useEffect(() => {
            HomePageServices.getOpinionsToProduct(product.productId).then((responseOpinion) => {
                setOpinions(responseOpinion.data);
              });
       }, []);


    const handleRating = () => {

        var rating = 0;
        var liczba_ocen = opinions.length;
        
          for(var i=0; i< liczba_ocen ; i++) 
          {
            rating += opinions[i].rate;
          }
    
          var finalSum = rating/liczba_ocen;
          finalSum = finalSum.toFixed(1);
    
          
          if(liczba_ocen == 0 ){
            finalSum = 0;
          }
    
          return(
            <Rating value={parseFloat(finalSum)} readOnly precision={0.5} size="small"/>
          );
}


  return (
    <div className='RecommendedProduct__wrapper' >
    <div className='img__container'>
      <img src ={computer} alt ="computer" ></img>
    </div>
    <div className='title__container'>{product.productName}</div>
    <div className='stars__container'> 
    {handleRating()}
     </div>
    <div className='price__btn__container'>
      <div className='price__container'>{product.new_Price} PLN</div>
      <div className='btn__container'>
      <button type="button" className="btn btn-success btn-sm"> <i class="bi bi-cart"></i>Success</button>
      </div>
    </div>
  </div>
  )
}

export default RecommendedProduct