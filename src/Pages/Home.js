import React, { useState,useEffect,useContext } from 'react'
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import MostOrderProducts from "../Components/MostOrderProducts";
import "./Home.css"
import Slider from "../Components/Slider";
import RecommendedProducts from "../Components/RecommendedProducts";
import Categories from "../Components/Categories";
import styled from 'styled-components';
import MostRatedProducts from "../Components/MostRatedProducts";
import HomePageServices from '../Services/HomePageServices';
import { UserContext } from '../Context/UserContext';
import Divider from '@mui/material/Divider';

const StyledDivider = styled(Divider)`
  background-color: black;
`

const Home = () => {  

    const [sliderProduct, setSliderProduct] = useState([]);
    const [recoomendedProducts, setRecommendedProducts] = useState([]);
    const [mostOrderProducts, setMostOrderProducts] = useState([]);
    const [mostRatedProducts, setMostRatedProducts] = useState([]);

    const {setUser } = useContext(UserContext);
  
    /*
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

  */

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