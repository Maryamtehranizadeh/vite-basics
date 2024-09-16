import StyledDiv from "./StyledDiv";
function MyButton({ clickHandler }) {
  return (
    <StyledDiv>
      <h2>My Button Component</h2>
      <button onClick={clickHandler}>My Button</button>
    </StyledDiv>
  );
}
export default MyButton;
