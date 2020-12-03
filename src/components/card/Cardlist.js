import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = (props) => {
  return (
    <div className="cardList">
      {props.users.map((user) => (
        <Card key={user.id.value} user={user} />
      ))}
    </div>
  );
};

export default CardList;
