import React from "react";
import { NavLink } from "react-router-dom";

// styles
import "./Navigation.css";

// data
import navItems from "../../data/navigation";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navItems.map((item) => {
          const { displayName, url, title } = item;
          return (
            <li className="navbar-item">
              <NavLink className="navbar-link" to={url} title={title}>
                {displayName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
