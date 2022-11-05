import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  let cardStyle = props.className
    ? `${classes["card"]} ${props.className}`
    : `${classes["card"]}`;

  return (
    <div
      id={props.id ? props.id : ""}
      className={cardStyle}
      onClick={props.onClick ? props.onClick : null}
    >
      {props.children}
    </div>
  );
};

export default Card;
