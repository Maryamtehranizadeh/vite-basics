import React from "react";

function ChildB({ number, setNumber, text }) {
  return (
    <div style={{ border: "2px solid", padding: "20px", margin: "20px" }}>
      <h1>ChildB</h1>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number * 2)}>*</button>
      <span>{text}</span>
    </div>
  );
}

export default ChildB;
