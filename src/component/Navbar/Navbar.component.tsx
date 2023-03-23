import React from "react";
import "./Navbar.style.scss";

const Navbar: React.FC = () => {
  const menuItems: string[] = ["Home", "About", "Contact"];

  return (
    <nav className="Navbar">
      <div className="Navbar-Logo">pramod.dev</div>
      <ul className="Navbar-List">
        {menuItems.map((item: string) => (
          <li className="Navbar-Links" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
