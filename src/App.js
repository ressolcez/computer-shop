import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import ProductDetails from './Pages/ProductDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/ProductDetail" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
