import React from "react";

import classes from './Alert.module.css';

const Alert = (props) => {
  return (
    <div className={classes['alert-container']}>
      <p>You Got {props.correct} Correct and {Math.abs(props.correct - 5)} wrong!</p>
      <p>Your Score is {props.correct/5 * 100}%</p>
    </div>
  );
};

export default Alert;
