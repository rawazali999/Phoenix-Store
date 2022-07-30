import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Login from './pages/Login';
import Register from './pages/Signup';
import Products from './pages/Products';
import Product from './pages/Product';

function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
