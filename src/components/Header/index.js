import React from "react";

// styles
import "./Header.css";

// components
import Logo from "../Logo";
import Navigation from "../Navigation";

function Header() {
  return (
    <header className="header">
      <a class="skip-link" href="#maincontent">
        Skip to main
      </a>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
