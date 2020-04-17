import React from "react";

// styles
import "./Header.css";

// components
import Logo from "../Logo";
import Navigation from "../Navigation";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
