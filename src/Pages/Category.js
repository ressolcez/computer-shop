import React from 'react'
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import CategoryComponent from '../CategoryComponents/CategoryComponent';
import "./Category.css";

function Category() {
  return (
    <div className="category__wrappper">
    <Topbar/>
        <div style= {{flex:1}}>
          <CategoryComponent/>
        </div>
      <Footer/>
    </div>
  )
}

export default Category