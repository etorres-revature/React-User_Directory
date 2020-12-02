import React from "react";
import "./Navbar.css"

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar">
      <h1>
        <i className={icon} /> {" "}{title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "User Directory",
  icon: "fas fa-user",
};

export default Navbar;
