import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminDashboard from './Pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/ProductDetail" element={<ProductDetails/>}/>
      <Route  path="/Cart" element={<Cart/>}/>
      <Route  path="/Login" element={<Login/>}/>
      <Route  path="/Register" element={<Register/>}/>
      <Route  path="/Admin" element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
