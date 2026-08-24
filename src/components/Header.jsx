import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;