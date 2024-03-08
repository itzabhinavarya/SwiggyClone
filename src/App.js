import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Landingpage from "./component/landingpage";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./component/AddToCart";
import OrderSucess from "./component/orderSuccess";
import Order from "./component/Order";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/orderSuccess" element={<OrderSucess />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
