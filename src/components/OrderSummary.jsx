import React from "react";

function OrderSummary({ total, onContinueShopping }) {
  return (
    <div className="h-fit rounded-2xl border border-line bg-surface p-5 sm:p-6">

      <h2 className="font-display text-xl font-extrabold tracking-wide text-paper">
        Order Summary
      </h2>

      <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">

        <div className="flex justify-between font-sans text-sm text-muted sm:text-base">
          <span>Subtotal</span>
          <span className="font-mono text-paper">PKR {total}</span>
        </div>

        <div className="flex justify-between font-sans text-sm text-muted sm:text-base">
          <span>Shipping</span>
          <span className="font-mono text-paper">PKR 150</span>
        </div>

        <div className="border-t border-line pt-3 sm:pt-4">
          <div className="flex justify-between">
            <span className="font-sans text-base font-semibold text-paper sm:text-lg">
              Total
            </span>
            <span className="font-mono text-base font-semibold text-brass sm:text-lg">
              PKR {total + 150}
            </span>
          </div>
        </div>
      </div>

      <button className="mt-6 w-full rounded-xl bg-brass px-5 py-3 font-sans font-semibold text-ink transition hover:bg-brass-hover active:scale-95">
        Proceed to Checkout
      </button>

      <button
        className="mt-3 w-full rounded-xl border border-line px-5 py-3 font-sans font-medium text-paper transition hover:border-brass hover:text-brass"
        onClick={onContinueShopping}
      >
        Continue Shopping
      </button>

    </div>
  );
}

export default OrderSummary;