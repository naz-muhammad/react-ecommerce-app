import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

function ProductDetailPage() {

  const {addToCart} = useContext(CartContext)
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const url =
          "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json";

        const response = await fetch(url);
        const data = await response.json();

        const selectedProduct = data.find( (product) => product?.id === productId)

        setProduct(selectedProduct);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center font-sans text-muted">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center font-sans text-muted">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink px-4 py-6 sm:px-6 md:px-8 md:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">

        {/* PRODUCT IMAGE — full width block on mobile, sticky column on desktop */}
        <div className="flex h-72 items-center justify-center rounded-2xl border border-line bg-surface-raised sm:h-96 md:sticky md:top-24 md:h-130">
          <img
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-contain p-8 sm:p-10"
          />
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="font-sans text-xs uppercase tracking-widest text-muted">
            {product?.category}
          </p>

          {/* Product Name */}
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-wide text-paper sm:text-4xl md:text-5xl">
            {product?.name}
          </h1>

          {/* Price */}
          <div className="ticket mt-5 inline-flex w-fit items-center bg-brass py-1.5 pl-5 pr-3.5">
            <span className="font-mono text-lg font-semibold text-ink sm:text-xl">
              PKR {product?.priceCents}
            </span>
          </div>

          {/* Description */}
          <div className="mt-6 sm:mt-8">
            <h2 className="mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-muted">
              Description
            </h2>

            <p className="max-w-xl font-sans leading-7 text-paper/80">
              {product?.description}
            </p>
          </div>

          {/* Actions — stack full-width on mobile, side by side from sm: up */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">

            <button
              className="flex-1 rounded-xl border border-line px-6 py-3.5 font-sans font-medium
                         text-paper transition hover:border-brass hover:text-brass"
              onClick={()=>addToCart(product)}
            >
              Add to Cart
            </button>

            <button className="flex-1 rounded-xl bg-brass px-6 py-3.5 font-sans font-semibold
                                text-ink transition hover:bg-brass-hover active:scale-95">
              Buy Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;