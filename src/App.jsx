import React, { useState } from "react";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { CartPage } from "./pages/CartPage";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Payment } from "./pages/Payment";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => (item._id || item.id) === (product._id || product.id),
      );

      if (existingItem) {
        return prevCart.map((item) =>
          (item._id || item.id) === (product._id || product.id)
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <Navbar />
      <nav></nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Product onAddToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route />
      </Routes>
    </Router>
  );
};
export default App;
