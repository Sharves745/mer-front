import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Products from "./products";
import Cart from "./cart";
import AddProduct from "./AddProduct";
import NavBar from "./NavBar";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prev) => [
      ...prev,
      { ...item, cartItemId: Date.now() }
    ]);
  }

  function removeFromCart(cartItemId) {
    setCartItems((items) =>
      items.filter((item) => item.cartItemId !== cartItemId)
    );
  }

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="content">
              <Home />
            </div>
          }
        />

        <Route
          path="/products"
          element={
            <div className="content">
              <Products addToCart={addToCart} />
            </div>
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <div className="content">
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            </div>
          }
        />

        <Route
          path="/add-product"
          element={
            <div className="content add-product-page">
              <AddProduct />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
