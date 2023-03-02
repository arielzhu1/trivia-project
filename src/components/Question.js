import AnswerChoice from "./AnswerChoice";

function Question(props) {
  return (
    <div>
      <p>{props.question}</p>
      {props.choices.map((choice) => (
        <AnswerChoice answer={choice} setAnswerState={props.setAnswerState} />
      ))}
    </div>
  );
}

export default Question;
