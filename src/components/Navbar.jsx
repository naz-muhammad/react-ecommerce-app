import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';

function Navbar() {

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

      <NavLink to="/cart-page" className={navStyle}>
        <ShoppingCart />
      </NavLink>
    </nav>
  )
}

export default Navbar