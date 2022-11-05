import React from "react";

import Card from "../shared/Card";
import classes from "./Question.module.css";
import QuizOption from "./QuizOption";

const Question = (props) => {
  return (
    <React.Fragment>
      {props.questionarray.map((q) => {
        return (
          <Card key={q.id} className={classes["question"]} id={q.id}>
            <p>{q.question}</p>
          </Card>
        );
      })}
      <Card className={classes['answer-container']}>
        {props.answersarray[0].options.map((option) => (
          <QuizOption
            key={option.id}
            option={option.option}
            onClick={props.onClick}
            id={option.id}
          />
        ))}
      </Card>
    </React.Fragment>
  );
};

export default Question;
