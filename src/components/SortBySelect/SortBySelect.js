import React from "react";
import "./SortBySelect.css";

const SortBySelect = ({
  lastNameAsc,
  lastNameDesc,
  firstNameAsc,
  firstNameDesc,
}) => {
  return (
    <div className="button-container">
      <button className="btn btn-bluegreen" onClick={lastNameAsc}>
        Last Name: A - Z
      </button>
      <button className="btn btn-greenblue" onClick={lastNameDesc}>
        Last Name: Z - A
      </button>
      <button className="btn btn-bluegreen" onClick={firstNameAsc}>
        First Name: A - Z
      </button>
      <button className="btn btn-greenblue" onClick={firstNameDesc}>
        First Name: Z - A
      </button>
    </div>
  );
};

export default SortBySelect;
