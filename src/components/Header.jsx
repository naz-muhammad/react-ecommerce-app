import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

function Header() {
  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-5 sm:flex-row sm:justify-between sm:px-6">

        <Logo />

        <Navbar />

      </div>
    </header>
  )
}

export default Header