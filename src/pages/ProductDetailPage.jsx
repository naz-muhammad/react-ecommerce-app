import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
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
      <div className="flex min-h-screen items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">

        {/* LEFT - PRODUCT IMAGE */}
        <div className="flex md:min-h-125 min-h-[40vh] items-center justify-center rounded-2xl border border-gray-700 bg-gray-900 ">
          <img
            src={product?.image}
            alt={product?.name}
            className="max-h-112.5 w-full object-contain p-10"
          />
        </div>

        {/* RIGHT - PRODUCT DETAILS */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="mb-3 text-sm text-gray-400">
            {product?.category}
          </p>

          {/* Product Name */}
          <h1 className="text-3xl font-bold text-white lg:text-5xl">
            {product?.name}
          </h1>

          {/* Price */}
          <div className="mt-6">
            <span className="text-3xl font-bold text-white">
              PKR {product?.priceCents}
            </span>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="mb-3 text-lg font-semibold text-white">
              Description
            </h2>

            <p className="max-w-xl leading-7 text-gray-400">
              {product?.description}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-10 flex gap-4">

            <button className="flex-1 rounded-xl border border-gray-600 px-6 py-3 font-medium text-white transition hover:bg-gray-800">
              Add to Cart
            </button>

            <button className="flex-1 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
              Buy Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
