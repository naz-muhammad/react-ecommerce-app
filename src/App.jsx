import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext } from "react";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) =>
    setCart((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...prev,
        {
          product: product,
          quantity: 1,
        },
      ];
    });

  const removeFromCart = (productId) =>
    setCart((prev) => {
      return prev.filter((item) => productId !== item.product.id);
    });

  
  const increaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  
  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <div className="min-h-screen bg-black text-white w-full">
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          increaseQuantity,
          decreaseQuantity,
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<ProductsPage />} />

          <Route
            path="/product-detail/:productId"
            element={<ProductDetailPage />}
          />

          <Route path="/cart-page" element={<CartPage />} />
        </Routes>

        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
