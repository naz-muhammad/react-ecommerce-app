import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

function Product({ productData }) {

  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div className="group overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brass/60">

      {/* Image Area — fixed aspect ratio keeps mixed API image sizes consistent */}
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-surface-raised p-6">

        <img
          src={productData.image}
          alt={productData.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Price ticket badge */}
        <div className="ticket absolute left-0 top-4 flex items-center gap-1 bg-brass py-1 pl-4 pr-2.5">
          <span className="font-mono text-xs font-semibold text-ink">
            PKR {productData.priceCents}
          </span>
        </div>

      </div>

      {/* Product Name */}
      <div className="px-4 pt-4">
        <p className="font-sans text-xs uppercase tracking-wide text-muted">
          {productData.category}
        </p>
        <h2 className="mt-1 line-clamp-2 min-h-12 font-sans text-base font-semibold text-paper">
          {productData.name}
        </h2>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 p-4 pt-3">

        <button
          className="flex-1 rounded-lg border border-line px-3 py-2.5 font-sans text-sm font-medium
                     text-paper transition hover:border-brass hover:text-brass"
          onClick={() => navigate(`/product-detail/${productData.id}`)}
        >
          Detail
        </button>

        <button
          className="flex-1 rounded-lg bg-brass px-3 py-2.5 font-sans text-sm font-semibold
                     text-ink transition hover:bg-brass-hover active:scale-95"
          onClick={() => addToCart(productData)}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default Product;