import React from "react";
import { CartContext } from "../App";
import { useContext } from "react";

function Cart(props) {

  
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const cartItem = props.cartItem;

  const product = cartItem.product;

  const quantity = cartItem.quantity;

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-gray-900 p-5 sm:flex-row sm:items-center">

      {/* Product Image */}

      <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-gray-800 sm:h-32 sm:w-32">

        <img
          src={product.image}
          alt={product.name}
          className="h-28 w-28 object-contain"
        />

      </div>

      {/* Product Information */}

      <div className="flex flex-1 flex-col justify-between gap-4">

        <div>

          <p className="text-sm text-gray-500">
            {product.category}
          </p>

          <h2 className="mt-1 text-xl font-semibold text-white">
            {product.name}
          </h2>

          {/*price reflects quantity */}
          <p className="mt-2 text-lg font-bold text-white">
            PKR {product.priceCents * quantity}
          </p>

        </div>

        {/* Actions */}

        <div className="flex flex-wrap items-center justify-between gap-4">

          {/* Quantity */}

          <div className="flex items-center rounded-lg border border-gray-700">

            <button
              className="px-3 py-2 text-gray-300 hover:bg-gray-800"
              onClick={() => decreaseQuantity(product.id)}
            >
              −
            </button>

            <span className="min-w-10 text-center text-white">
              {quantity}
            </span>

            <button
              className="px-3 py-2 text-gray-300 hover:bg-gray-800"
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>

          </div>

          {/* Remove */}

          <button
            className="text-sm text-gray-500 transition hover:text-red-400"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </button>

        </div>
      </div>
    </div>
  );
}

export default Cart;