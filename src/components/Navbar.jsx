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
    (total , cartItem) => total + cartItem.quantity , 0
  )

  const navStyle = ({ isActive }) =>
    `font-sans text-sm font-medium tracking-wide uppercase transition-colors ${
      isActive
        ? 'text-brass'
        : 'text-muted hover:text-paper'
    }`

  return (
    <nav className="flex items-center gap-6 sm:gap-8">

      <NavLink to="/" className={navStyle}>
        Products
      </NavLink>

      <NavLink
        to="/cart-page"
        className={({ isActive }) =>
          `relative flex items-center transition-colors ${
            isActive ? 'text-brass' : 'text-muted hover:text-paper'
          }`
        }
      >
        <ShoppingCart size={22} strokeWidth={1.75} />

        {cartCount > 0 && (
          <span className="
            absolute -right-2 -top-2
            flex h-5 w-5
            items-center justify-center
            rounded-full
            bg-brass
            font-mono
            text-[11px]
            font-semibold
            text-ink
          ">
            {cartCount}
          </span>
        )}

      </NavLink>

    </nav>
  )
}

export default Navbar