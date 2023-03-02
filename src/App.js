import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "./components/Question";
import NextQuestion from "./components/NextQuestion";

function App() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [answerDisplayed, setAnswerDisplayed] = useState(null);
  const [answerState, setAnswerState] = useState(null);

  function getCorrectAnswer(questionNum) {
    const correctIndex =
      data[currentQuestionNumber].question.correct_choice_index;
    return data[currentQuestionNumber].question.choices[correctIndex];
  }

  function questionAnswered(answerState) {
    if (answerState === null) {
      return "Click an answer above.";
    } else if (answerState === getCorrectAnswer(currentQuestionNumber)) {
      return "Answer is correct!";
    } else {
      return "Try again";
    }
  }

  function goToNextQuestion() {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    setAnswerState(null);
  }

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question
        setAnswerState={setAnswerState}
        question={data[currentQuestionNumber].question.text}
        choices={data[currentQuestionNumber].question.choices}
      />
      <p>{questionAnswered(answerState)}</p>
      <NextQuestion
        goToNextQuestion={goToNextQuestion}
        questionNum={currentQuestionNumber}
      />
    </div>
  );
}

export default App;
