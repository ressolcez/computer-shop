import React, {useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminDashboard from './Pages/AdminDashboard';
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/:cateGoryName/:productId" element={<ProductDetails/>}/>
      <Route  path="/Cart" element={<Cart/>}/>
      <Route  path="/Login" element={<Login/>}/>
      <Route  path="/Register" element={<Register/>}/>
      <Route  path="/Admin" element={<AdminDashboard/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
