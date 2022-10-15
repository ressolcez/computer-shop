
import React, { useState,useEffect } from 'react'
import './Topbar.css';
import Logo from "../Images/Logo.png";
import ShoppingCart from "../Images/shopping_cart.png";
import User from "../Images/user.png";
import SearchBar from './SearchBar';
import {Link } from "react-router-dom";
import styled from 'styled-components';
import TopBarServices from "../Services/TopBarServices"

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover{
    color: black;
  }
`

function Topbar() {


    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        TopBarServices.getAllProducts().then((response) => {
           setAllProducts(response.data);
         });
       }, []);


    return (
        <div className="topbar__wrapper" role="navigation">

            <div className="topbar__leftBox">
                <StyledLink to={"/"}>
                    <img src={Logo} alt="Logo" className= "topbar__img"/>
                </StyledLink>
            </div>
            <div className="topbar__middleBox">
                <SearchBar products={allProducts}/>
            </div>

            <div className="topbar__rightBox">
                <div className = "topbar__rightBox__account">
                <img src={User} alt = "User"/>
                <span className = "topbar__rightBox_spanItem">Twoje konto</span>
                </div>
                <StyledLink to={"/Cart"}>
                    <div className = "topbar__rightBox__cart">
                                
                                    <img src={ShoppingCart} alt = "ShoppingCart"/>
                
                            <span className = "topbar__rightBox_spanItem">Twój Koszyk</span>
                    </div>
                </StyledLink>  
            </div>

        </div>
    )
  }
  
  export default Topbar