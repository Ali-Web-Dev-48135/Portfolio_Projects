import React from "react";

import Card from "../shared/Card";
import classes from "./QuizOption.module.css";

const QuizOption = (props) => {
  const respondToQuestionHandler = (event) => {
    props.onClick(event.target.id);
  };

  return (
    <Card
      id={props.id}
      onClick={respondToQuestionHandler}
      className={classes["quizoption"]}
    >
      {props.option}
    </Card>
  );
};

export default QuizOption;
