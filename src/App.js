import React, { useState, useMemo,useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserContext} from "./Context/UserContext";
import { CartProvider } from "react-use-cart";
import Home from "./Pages/Home"
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminDashboard from './Pages/AdminDashboard';
import Category from "./Pages/Category";
import WaitPage from "./SharedComponent/WaitPage";
import UserRecentOrders from "./Pages/UserRecentOrders";


function App() {

  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <CartProvider>
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/:name/:id" element={<ProductDetails/>}/>
          <Route  path="/Category" element={<Category/>}/>
          <Route  path="/Cart" element={<Cart/>}/>
          <Route  path="/Login" element={<Login/>}/>
          <Route  path="/Register" element={<Register/>}/>
          <Route  path="/Wait" element={<WaitPage/>}/>
          <Route  path="/Admin" element={<AdminDashboard/>}/>
          <Route  path="/Orders" element={<UserRecentOrders/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </CartProvider>
  );
}

export default App;
