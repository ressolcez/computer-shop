import React, { useState,useEffect } from 'react'
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
import PacmanLoader from "react-spinners/PacmanLoader";
import HomePageServices from '../Services/HomePageServices';

const StyledDivider = styled(Divider)`
  background-color: black;
`
const StyledSpinner = styled.div`text-align:center; margin-top:50vh;`


const Home = () => {  

    const [sliderProduct, setSliderProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        HomePageServices.getSliderContent().then((response) => {
           setSliderProducts(response.data);
           setLoading(false);
         });
       }, []);

       if (isLoading) {
        return (
        <StyledSpinner>
            <PacmanLoader color= 'gray'/>
        </StyledSpinner>
        );
      }

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
                <MostOrderProducts/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Przeceny!</h2>
                </div>
                <DiscountProducts/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Najlepiej oceniane produkty!</h2>
                </div>
                <RecommendedProducts/>
                <StyledDivider/>
                <Footer/>
            </main>
    );
  }
  
  export default Home