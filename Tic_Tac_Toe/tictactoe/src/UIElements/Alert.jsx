import React from "react";

import "./Alert.css";

const Alert = (props) => {
  return (
    <div className="alert-container">
      <p>{props.winnerText}</p>
      <button onClick={props.onClick}>Ok</button>
    </div>
  );
};

export default Alert;
