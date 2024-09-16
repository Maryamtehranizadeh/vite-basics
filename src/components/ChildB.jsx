import StyledDiv from "./StyledDiv";
function ChildB({ number, setNumber, text, button }) {
  return (
    <StyledDiv>
      <h1>ChildB</h1>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number * 2)}>*</button>
      <hr />
      <span>{text}</span>
      <div>{button}</div>
    </StyledDiv>
  );
}

export default ChildB;
