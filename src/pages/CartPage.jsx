import React from "react";
import Cart from "../components/Cart";
import { useContext } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";

function CartPage() {

  const {cart} = useContext(CartContext)
  const navigate = useNavigate()

  const total = cart?.reduce( ( prev , curr ) => prev + curr.priceCents , 0)

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-10">

      {/* Heading */}
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Your Cart
        </h1>

        <p className="mt-2 text-gray-400">
          Review your items before checkout.
        </p>
      </div>

      {/* Main Layout */}
      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">

        {/* Cart Items */}
        <div className="space-y-4">
          {
            cart?.map( (product) => (
              <Cart key={product.id} product={product}/>
            ))
          }
          
        </div>

        {/* Order Summary */}
        <div className="h-fit rounded-2xl border border-gray-800 bg-gray-900 p-6">

          <h2 className="text-xl font-semibold text-white">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span className="text-white">
                PKR {total}
              </span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Shipping</span>
              <span className="text-white">
                PKR 150
              </span>
            </div>

            <div className="border-t border-gray-800 pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-white">
                  Total
                </span>

                <span className="text-lg font-bold text-white">
                  PKR {total + 150}
                </span>
              </div>
            </div>

          </div>

          <button className="mt-6 w-full rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-gray-200">
            Proceed to Checkout
          </button>

          <button className="mt-3 w-full rounded-xl border border-gray-700 px-5 py-3 font-medium text-gray-300 transition hover:bg-gray-800"
          onClick={()=> navigate('/')}
          >
            Continue Shopping
          </button>

        </div>

      </div>
    </div>
  );
}

export default CartPage;