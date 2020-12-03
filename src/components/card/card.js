import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="user" src={props.user.picture.medium} />
      <h2>
        {props.user.name.title}. {props.user.name.first} {props.user.name.last}
      </h2>
      <p><strong>Phone:</strong> {props.user.phone}</p>
      <p><strong>E-mail:</strong> {props.user.email}</p>
    </div>
  );
};

export default Card;
