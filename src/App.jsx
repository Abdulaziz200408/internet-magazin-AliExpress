import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Card from "./Pages/Card";
import Cart from "./Pages/cart";
import Details from "./Pages/Detals";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card setCart={setCart} />} />{" "}
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
