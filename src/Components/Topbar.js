import React, { useState,useEffect,useContext } from 'react';
import { UserContext } from "../Context/UserContext";
import User from "../Images/user.png";
import Logo from "../Images/Logo.png";
import ShoppingCart from "../Images/shopping_cart.png";
import TopBarServices from "../Services/TopBarServices";
import SearchBar from '../SharedComponent/SearchBar';
import StyledLink from '../SharedComponent/StyledLink';
import AuthServices from '../Services/AuthServices';
import './Topbar.css';

function Topbar({user,setUser}) {

    const [allProducts, setAllProducts] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        TopBarServices.getProductsFiltered(searchWord).then((response) => {
            setAllProducts(response.data);
         });
       }, [searchWord]);

       const logoutUser = () =>
       {
            AuthServices.logoutUser();
            localStorage.removeItem('token')
            setUser(null);
            window.location.reload(false)
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
                        {!user ? ( 
                            <StyledLink to = {"/Login"}>
                                <span className = "topbar__rightBox_spanItem">Zaloguj</span>
                             </StyledLink>
                                ) : (
                                <span className = "topbar__rightBox_spanItem" onClick={()=>logoutUser()}>Wyloguj</span>     
                                )
                            }           
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