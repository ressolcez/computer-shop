import React, { useState} from 'react'
import styled from "styled-components";
import "./Searchbar.css"

const StyledDataResult = styled.div`
    margin-top: 5px;
    width: 38%;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    position: absolute;
    z-index: 2;
    padding: 5px;
    margin-left:5%;

    @media (max-width: 835px) {
      width: 36%;
  }

  @media (max-width: 700px) {
    width: 94%;
    margin-left:0%;
}
`

const StyledDataItem = styled.a`
    width: 100%;
    height: 60px;
    display: flex;
    color: black;
    margin-bottom: 8px;
`

const ImgC = styled.img`
  max-width: 70px;
  max-height: 70px;

`/* poprawic */
const TitleProductName = styled.text`
  font-size: 10px;
  width: 100px;
  font-weight: bold;
`

const TitleC = styled.div`
  margin-left: 10px;
`

const StyledPrice = styled.div`
    font-size: 9px;
    text-font:bold;
`

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {

      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.shortName.toLowerCase().includes(searchWord.toLowerCase());
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
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
            className = "topbar__search" 
          />
         
        </div>
        {filteredData.length !== 0 && (
            <StyledDataResult>
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <StyledDataItem>
                 <ImgC src = {value.image}/>
                    <TitleC>
                    <TitleProductName>{value.shortName}</TitleProductName>
                    <StyledPrice>{value.price},00zł</StyledPrice>
                    </TitleC>
                </StyledDataItem>     
              );
            })}
          </StyledDataResult>
        )}
      </div>
    );
  }

export default SearchBar