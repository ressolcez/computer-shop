import React from 'react'
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import CategoryComponent from '../CategoryComponents/CategoryComponent';
import "./Category.css";

function Category() {
  return (
    <div className="home__wrapper">
    <Topbar/>
        <CategoryComponent/>
      <Footer/>
    </div>
  )
}

export default Category