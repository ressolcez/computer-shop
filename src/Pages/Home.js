import React, { useState,useEffect,useContext } from 'react'
import Footer from "../Components/Footer";
import Topbar from "../Components/Topbar";
import MostOrderProducts from "../Components/MostOrderProducts";
import "./Home.css"
import Slider from "../Components/Slider";
import DiscountProducts from "../Components/DiscountProducts";
import Categories from "../Components/Categories";
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import RecommendedProducts from "../Components/RecommendedProducts";
import HomePageServices from '../Services/HomePageServices';
import { UserContext } from '../Context/UserContext';

const StyledDivider = styled(Divider)`
  background-color: black;
`

const Home = () => {  

    const [sliderProduct, setSliderProduct] = useState([]);
    const [discountProduct, setDiscountProduct] = useState([]);
    const [mostOrderProducts, setMostOrderProducts] = useState([]);
    const [recommendedProduct, setRecommendedProduct] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const {setUser } = useContext(UserContext);
  
    const isAuthorized = () => {
      if(localStorage.getItem('token')) {
        fetch('http://localhost:8080/api/authentication', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          },
        }).then(response => response.json())   
        .then( json => {
          console.log(json.status)
          if(json.status === 'pass'){
                const user = {
                  username: "bob",
                  email: "bob@bob.com"
                }
              setUser(user)
          }else{
            setUser(null);
          }
       } 
       ).catch(error => {
          console.log(error);
        });
      }
  }

    useEffect(() => {
       
       HomePageServices.getSliderContent().then((response) => {
           setSliderProduct(response.data);
           setLoading(false);
         });

         
         HomePageServices.getSliderContent().then((response) => {
            setDiscountProduct(response.data);
            setLoading(false);
          });
          
          HomePageServices.getMostOrderProducts().then((response) => {
            setMostOrderProducts(response.data);
            setLoading(false);
          });

          HomePageServices.getRecommendedProducts().then((response) => {
            setRecommendedProduct(response.data);
            setLoading(false);
          });
          
          isAuthorized();
          
       }, []);

    return (
            <main className="home__wrapper">
                <Topbar/>
                <Slider products = {sliderProduct}/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Kategorie</h2>
                </div>
                <Categories/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Najczęściej kupowane przedmioty</h2>
                </div>
                <MostOrderProducts products = {mostOrderProducts}/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Przeceny!</h2>
                </div>
                <DiscountProducts products = {discountProduct}/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Najlepiej oceniane produkty!</h2>
                </div>
                <RecommendedProducts products = {recommendedProduct}/>
                <StyledDivider/>
                <Footer/>
            </main>
    );
  }
  
  export default Home