import React, { useState,useEffect,useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import Divider from '@mui/material/Divider';
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import MostOrderProducts from "../Components/MostOrderProducts";
import Slider from "../Components/Slider";
import RecommendedProducts from "../Components/RecommendedProducts";
import Categories from "../Components/Categories";
import styled from 'styled-components';
import MostRatedProducts from "../Components/MostRatedProducts";
import HomePageServices from '../Services/HomePageServices';
import AuthServices from '../Services/AuthServices';
import "./Home.css"

const StyledDivider = styled(Divider)`
  background-color: black;
`

const Home = () => {  

    const [sliderProduct, setSliderProduct] = useState([]);
    const [recoomendedProducts, setRecommendedProducts] = useState([]);
    const [mostOrderProducts, setMostOrderProducts] = useState([]);
    const [mostRatedProducts, setMostRatedProducts] = useState([]);

    const {setUser } = useContext(UserContext);
 
    useEffect(() => {
       
       HomePageServices.getSliderContent().then((response) => {
           setSliderProduct(response.data);
         });

         
         HomePageServices.getSliderContent().then((response) => {
            setRecommendedProducts(response.data);
          });
          
          HomePageServices.getMostOrderProducts().then((response) => {
            setMostOrderProducts(response.data);
          });

          HomePageServices.getRecommendedProducts().then((response) => {
            setMostRatedProducts(response.data);
          });
          

          if(localStorage.getItem('token')){
              AuthServices.isAuthorized().then((response) => {
                if(response.data.status === 'pass'){
                  const user = {
                    userId: response.data.user_id,
                    role: response.data.role
                  }
                  setUser(user)
                }
              });
            }  

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
                    <h2>Polecane produkty!</h2>
                </div>
                <RecommendedProducts products = {recoomendedProducts}/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Najlepiej oceniane produkty!</h2>
                </div>
                <MostRatedProducts products = {mostRatedProducts}/>
                <StyledDivider/>
                <Footer/>
            </main>
    );
  }
  
  export default Home