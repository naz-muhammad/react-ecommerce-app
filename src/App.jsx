import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext } from "react";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);


  const addToCart =  (product) => setCart((prev) => [...prev , product]);

  const removeFromCart = (productId) => setCart((prev) => {
    return prev.filter(( elem ) => productId !== elem.id)
  })
        

  console.log(cart);

  return (
    <div className="min-h-screen bg-black text-white w-full">
      <CartContext.Provider value={{cart , addToCart , removeFromCart}}>
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
