import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
