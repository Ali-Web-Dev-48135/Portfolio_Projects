import React from "react";

import "./Box.css";

const Box = (props) => {
  // Id Prop
  // Value Prop
  // Belonging to who Prop

  const playerIcon = props.value === "X" ? "playerIcon" : "computerIcon";
  const speakToParent = () => {
    props.onClick(props.id);
  };

  return (
    <div className={`box ${playerIcon}`} onClick={speakToParent} id={props.id}>
      <p>{props.value}</p>
    </div>
  );
};

export default Box;
