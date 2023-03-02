function AnswerChoice(props) {
  return (
    <div className="answer-choice">
      <button onClick={() => props.setAnswerState(props.answer)}>
        {props.answer}
      </button>
    </div>
  );
}

export default AnswerChoice;
