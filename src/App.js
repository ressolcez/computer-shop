import React, { useState, useMemo,useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UserContext} from "./Context/UserContext";
import { CartProvider } from "react-use-cart";
import Home from "./Pages/Home"
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Category from "./Pages/Category";
import WaitPage from "./SharedComponent/WaitPage";
import UserRecentOrders from "./Pages/UserRecentOrders";
import UserEditAccount from "./Pages/UserEditAccount";
import AdminHome from "./Pages/Admin/AdminHome";
import AdminProducts from "./Pages/Admin/AdminProducts";
import AdminUsers from "./Pages/Admin/AdminUsers";
import AdminOrders from "./Pages/Admin/AdminOrders";
import Profile from "./Pages/Profile";
import CreateOrder from "./Pages/CreateOrder";
import PageNotFound from "./SharedComponent/PageNotFound";

function App() {

  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <CartProvider>
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/:name/:id" element={<ProductDetails/>}/>
          <Route  path="/Category" element={<Category/>}/>
          <Route  path="/Cart" element={<Cart/>}/>
          <Route  path="/Login" element={<Login/>}/>
          <Route  path="/Register" element={<Register/>}/>
          <Route  path="/Wait" element={<WaitPage/>}/>
          <Route  path="/Admin" element={<AdminHome/>}/>
          <Route  path="/Admin/Products" element={<AdminProducts/>}/>
          <Route  path="/Admin/Users" element={<AdminUsers/>}/>
          <Route  path="/EditProfile" element={<UserEditAccount/>}/>
          <Route  path="/RecentOrders" element={<UserRecentOrders/>}/>
          <Route  path="/Admin/Orders" element={<AdminOrders/>}/>
          <Route  path="/User/Profile" element={<Profile/>}/>
          <Route  path="/Order" element={<CreateOrder/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </CartProvider>
  );
}

export default App;
