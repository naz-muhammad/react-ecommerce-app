import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../App';

function Navbar() {

  // get cart from Context
  const { cart } = useContext(CartContext);

  //  calculate total number of items
  const cartCount = cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  const navStyle = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'text-white'
        : 'text-gray-400 hover:text-white'
    }`

  return (
    <nav className="flex items-center gap-2 sm:gap-4">

      <NavLink to="/" className={navStyle}>
        Products
      </NavLink>

      <NavLink
        to="/cart-page"
        className={`${navStyle} relative`}
      >
        <ShoppingCart />

        {/* 🔴 CHANGED: quantity badge */}
        {cartCount > 0 && (
          <span className="
            absolute -right-1 -top-1
            flex h-5 w-5
            items-center justify-center
            rounded-full
            bg-white
            text-xs
            font-bold
            text-black
          ">
            {cartCount}
          </span>
        )}

      </NavLink>

    </nav>
  )
}

export default Navbar