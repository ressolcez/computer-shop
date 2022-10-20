import React, { useState} from 'react'
import "./Searchbar.css"
import {Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover{
    color: black;
    text-decoration: none;
  }
`

function SearchBar({products,setSearchWord }) {
  /*  
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {

      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = products.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }

    };
    
    */
    
    return (
      <div>
        <div>
          <input
            type="text"
            className = "topbar__search"
            onChange={(e) => setSearchWord(e.target.value)}
          />
         
        </div>
        {products.length !== 0 && (
            <div className='data__result__wrapper'>
            {products.map((product) => {
              return (
                <StyledLink to={"/"+product.categoryModel.name+"/"+product.id} >
                <div className='styled__single__iteam__search' key = {product.productId}>
                <div className='item__image__search'>
                    <img style ={{width:'110px', height:'95px'}}src='https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_9_47_35_177_02.jpg'/>
                 </div>
                 <div className='item__description__search'>
                    <div className='name__serach'>
                      <b>Nazwa:&nbsp;</b> {product.name} 
                    </div>
                    <div className='category__search'>
                      <b>Kategoria:&nbsp;</b> {product.categoryModel.name}
                    </div>
                    <div className='producent__search'>
                      <b>Producent:&nbsp;</b> {product.producent}
                    </div>
                    <div className='price__search'>
                      <b>Cena:&nbsp;</b> {product.price}
                    </div>
                    
                 </div>
                </div>    
                </StyledLink> 
              );
            })}
          </div>
        )}
      </div>
    );
  }

export default SearchBar