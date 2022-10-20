import React, { useState,useEffect,useContext } from 'react';
import {Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import User from "../Images/user.png";
import Logo from "../Images/Logo.png";
import ShoppingCart from "../Images/shopping_cart.png";
import TopBarServices from "../Services/TopBarServices";
import SearchBar from '../SharedComponent/SearchBar';
import styled from 'styled-components';
import './Topbar.css';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover{
    color: black;
  }
`
function Topbar() {

    const [allProducts, setAllProducts] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    const { user} = useContext(UserContext);


    useEffect(() => {
        TopBarServices.getProductsFiltered(searchWord).then((response) => {
            setAllProducts(response.data);
         });

         console.log(searchWord)

        if(!user) return 

       }, [searchWord,user]);

       const checkAuth = () =>{
            if(!user) return <span className = "topbar__rightBox_spanItem">Zaloguj</span>;
            return <span className = "topbar__rightBox_spanItem">Wyloguj</span>
       }

    return (
        <div className="topbar__wrapper" role="navigation">       
            <div className="topbar__leftBox">
                <StyledLink to={"/"}>
                    <img src={Logo} alt="Logo" className= "topbar__img"/>
                </StyledLink>
            </div>
            <div className="topbar__middleBox">
                <SearchBar products={allProducts} setSearchWord = {setSearchWord}/>
            </div>
           <div className="topbar__rightBox">
                <div className = "topbar__rightBox__account">
                <img src={User} alt = "User"/>
                {checkAuth()}
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