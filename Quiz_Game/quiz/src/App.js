import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Navigation/Header";
import Question from "./components/Quiz/Question";
import Alert from "./components/shared/Alert";

import { Questions } from "./QuestionsData";
import { AnswerData } from "./AnswerData";

const App = () => {
  const [questionsArray, setQuestionArray] = useState(
    structuredClone(Questions)
  );
  const [answersArray, setAnswersArray] = useState(structuredClone(AnswerData));

  const [correctAnswers, setCorrectAnswers] = useState(0);

  const filteredQuestionsArray = [];
  filteredQuestionsArray.push(questionsArray[0]);

  const filteredAnswersArray = [];
  filteredAnswersArray.push(answersArray[0]);

  const answerValidateFunction = (id) => {

    const questionBasedOnAnswerId = filteredAnswersArray.find(
      (answer) => answer.id === filteredQuestionsArray[0].id
    );

    const answerId = questionBasedOnAnswerId.options.find(
      (answer) => answer.id === id
    );

    if (answerId.correct === true) {
      setCorrectAnswers((prev) => prev + 1);
    }

    const foundQuestion = questionsArray.filter(
      (q) => q.id !== questionBasedOnAnswerId.id
    );
    const foundAnswer = answersArray.filter(
      (a) => a.id !== questionBasedOnAnswerId.id
    );
    console.log("Reached");
    setQuestionArray((prev) => {
      return [...foundQuestion];
    });
    setAnswersArray((prev) => {
      return [...foundAnswer];
    });
  };

  if(filteredAnswersArray[0] === undefined || filteredQuestionsArray[0] === undefined)
  {
    console.log("Completed");
    return <Alert correct={correctAnswers}/>
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        <Question
          questionarray={filteredQuestionsArray}
          answersarray={filteredAnswersArray}
          onClick={answerValidateFunction}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
