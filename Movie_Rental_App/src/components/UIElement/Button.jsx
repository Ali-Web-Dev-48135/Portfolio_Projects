import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const btnStyle = props.className
    ? `${classes["btn"]} ${props.className}`
    : `${classes["btn"]}`;

  return (
    <button className={btnStyle} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
