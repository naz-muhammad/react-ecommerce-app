import React from "react";
import Cart from "../components/Cart";
import OrderSummary from "../components/OrderSummary";
import { useContext } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  // calculate total using price × quantity
  const total = cart?.reduce(
    (prev, curr) =>
      prev + curr.product.priceCents * curr.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-ink px-4 py-6 sm:px-6 md:py-8 lg:px-10">

      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-2xl font-extrabold tracking-wide text-paper sm:text-3xl md:text-4xl">
          Your Cart
        </h1>

        <p className="mt-2 font-sans text-sm text-muted sm:text-base">
          Review your items before checkout.
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-[1fr_360px]">

        {/* Cart Items */}
        <div className="space-y-4">

          {cart?.map((cartItem) => (

            <Cart
              key={cartItem.product.id}
              cartItem={cartItem}
            />

          ))}
          
        </div>

        {/* Order Summary — stacks below the list on mobile via grid-cols-1 above */}
        <OrderSummary total={total} onContinueShopping={() => navigate("/")} />

      </div>
    </div>
  );
}

export default CartPage;