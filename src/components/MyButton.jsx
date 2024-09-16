function MyButton({ clickHandler }) {
    return (
      <div style={{ border: "2px solid", padding: "20px", margin: "20px" }}>
        <h2>My Button Component</h2>
        <button onClick={clickHandler}>My Button</button>
      </div>
    );
  }
export default MyButton  