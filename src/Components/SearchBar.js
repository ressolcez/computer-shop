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
const StyledDataResult = styled.div`
    margin-top: 5px;
    width: 38%;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    position: absolute;
    z-index: 5;
    padding: 5px;
    margin-left:5%;

    @media (max-width: 950px) {
      width: 47%;
      margin-left:6%;
  }

  @media (max-width: 700px) {
    width: 96%;
    margin-left:1%;

}

@media (max-width: 500px) {
    width: 98%;
    margin-left:0%;
}

`

const StyledDataItem = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    color: black;
    margin-bottom: 8px;
`

const ImgC = styled.img`
  max-width: 150px;
  max-height: 150px;

`

const TitleProductName = styled.p`
  font-size: 13px;
  width: 100%;
  font-weight: bold;
  text-align: left;
  margin-bottom: 0%;
`

const TitleC = styled.div`
`

const StyledPrice = styled.div`
    font-size: 11px;
  
`

function SearchBar({products }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {

      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = products.filter((value) => {
        return value.productName.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }

    };
    
    return (
      <div>
        <div>
          <input
            type="text"
            value={wordEntered}
            onChange={handleFilter}
            className = "topbar__search"
          />
         
        </div>
        {filteredData.length !== 0 && (
            <StyledDataResult>
            {filteredData.slice(0, 15).map((value) => {
              return (
                <StyledLink to={"/"+value.categoryModel.category_id+"/"+value.productId} >
                <StyledDataItem key = {value.productId}>
                 <ImgC src='https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_9_47_35_177_02.jpg'/>
                    <TitleC>
                    <TitleProductName>{value.productName}</TitleProductName>
                    <StyledPrice>{value.new_Price},00zł</StyledPrice>
                    </TitleC>
                </StyledDataItem>    
                </StyledLink> 
              );
            })}
          </StyledDataResult>
        )}
      </div>
    );
  }

export default SearchBar