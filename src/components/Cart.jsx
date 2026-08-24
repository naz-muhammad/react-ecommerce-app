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
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5">

      {/* Product Image */}

      <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-surface-raised sm:h-28 sm:w-28">

        <img
          src={product.image}
          alt={product.name}
          className="h-24 w-24 object-contain"
        />

      </div>

      {/* Product Information */}

      <div className="flex flex-1 flex-col justify-between gap-4">

        <div>

          <p className="font-sans text-xs uppercase tracking-wide text-muted">
            {product.category}
          </p>

          <h2 className="mt-1 font-sans text-lg font-semibold text-paper sm:text-xl">
            {product.name}
          </h2>

          {/* price reflects quantity */}
          <div className="ticket mt-2 inline-flex w-fit items-center bg-brass py-1 pl-4 pr-2.5">
            <span className="font-mono text-sm font-semibold text-ink">
              PKR {product.priceCents * quantity}
            </span>
          </div>

        </div>

        {/* Actions */}

        <div className="flex flex-wrap items-center justify-between gap-4">

          {/* Quantity */}

          <div className="flex items-center rounded-lg border border-line">

            <button
              className="px-3 py-2 font-mono text-paper transition hover:text-brass"
              onClick={() => decreaseQuantity(product.id)}
            >
              −
            </button>

            <span className="min-w-10 text-center font-mono text-sm text-paper">
              {quantity}
            </span>

            <button
              className="px-3 py-2 font-mono text-paper transition hover:text-brass"
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>

          </div>

          {/* Remove */}

          <button
            className="font-sans text-sm text-muted transition hover:text-red-400"
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