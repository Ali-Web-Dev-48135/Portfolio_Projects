import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import classes from "./Alert.module.css";

const AlertMessage = (props) => {
  return (
    <div className={classes["alert-box"]}>
      <p>{props.message}!</p>
      <Button onClick={props.onClick} className={classes['alert-btn']}>Close</Button>
    </div>
  );
};

const Alert = (props) => {
  console.log("Mounted");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <AlertMessage message={props.message} onClick={props.onClick} />,
        document.getElementById("alert-container")
      )}
    </React.Fragment>
  );
};

export default Alert;
