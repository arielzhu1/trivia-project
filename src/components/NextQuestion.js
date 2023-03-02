function NextQuestion(props) {
  return (
    <div>
      <button onClick={props.goToNextQuestion}>Next Question</button>
      <p>Question {props.questionNum}</p>
    </div>
  );
}

export default NextQuestion;
