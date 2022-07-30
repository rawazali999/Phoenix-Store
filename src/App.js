import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Login from './pages/Login';
import Register from './pages/Signup';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from "./pages/Cart";
import Electronics from "./pages/Electronics";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
