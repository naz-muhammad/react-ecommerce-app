import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Product({ productData , addToCart }) {


  const navigate = useNavigate()

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600">

      {/* Image Area */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-gray-800">

        <img
          src={productData.image}
          alt={productData.name}
          className="h-40 w-40 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Transparent Price Badge */}
        <div className="absolute left-2 top-2 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-white/20 bg-black/30 text-white shadow-lg backdrop-blur-md">
          <span className="text-[9px] text-gray-300">PKR</span>
          <span className="text-sm font-bold">
            {productData.priceCents}
          </span>
        </div>

      </div>

      {/* Product Name */}
      <div className="mt-4">
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold text-white">
          {productData.name}
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">

        <button 
        className="flex-1 rounded-lg border border-gray-600 px-3 py-2.5 text-sm font-medium text-white transition hover:border-gray-400 hover:bg-gray-800"
        onClick={() => navigate (`/product-detail/${productData.id}`)}
        >
          Detail
        </button>

        <button className="flex-1 rounded-lg bg-white px-3 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200 active:scale-95"
        onClick={()=>addToCart(productData)}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default Product;