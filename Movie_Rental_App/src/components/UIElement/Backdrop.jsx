import React from "react";
import ReactDom from "react-dom";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  console.log("Rendered Backdrop");
  const backdrop = (
    <div className={classes["backdrop"]} onClick={props.onClick}>
      {props.children}
    </div>
  );
  return ReactDom.createPortal(
    backdrop,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
