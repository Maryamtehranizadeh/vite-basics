function ChildB({ number, setNumber, text, button }) {
  return (
    <div style={{ border: "2px solid", padding: "20px", margin: "20px" }}>
      <h1>ChildB</h1>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number * 2)}>*</button>
      <hr />
      <span>{text}</span>
      <div>{button}</div>
    </div>
  );
}

export default ChildB;
