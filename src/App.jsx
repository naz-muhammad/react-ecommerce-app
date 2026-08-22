import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  console.log(cart);

  return (
    <div className="min-h-screen bg-black text-white w-full">
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage addToCart={(product)=>{
          setCart((prev) => [...prev , product.category])
        }} />} />
        <Route
          path="/product-detail/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
