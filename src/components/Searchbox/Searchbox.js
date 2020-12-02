import React from "react";
import "./Searchbox.css";

const Searchbox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="searchBox"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Searchbox;
