import React from "react";
import { Link } from "react-router-dom";

// styles
import "./Logo.css";

//logo
import logo from "../../assests/images/y18.gif";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" title="Hacker News | Feed">
        <img src={logo} alt="Hacker News" />
      </Link>
    </div>
  );
};

export default Logo;
