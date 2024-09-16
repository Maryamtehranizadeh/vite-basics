import StyledDiv from "./StyledDiv";
function ChildA({ number, setNumber }) {
  return (
    <StyledDiv title="This is a title coming from props">
      <h1>Child A</h1>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number - 1)}>-</button>
    </StyledDiv>
  );
}

export default ChildA;
