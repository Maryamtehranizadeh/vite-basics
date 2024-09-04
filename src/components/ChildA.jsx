import { useState } from "react";
function ChildA({ number, setNumber }) {
  return (
    <div style={{ border: "2px solid", padding: "20px", margin: "20px" }}>
      <h1>Child A</h1>
      <p>{number}</p>
      <button onClick={() => setNumber((number) => number - 1)}>-</button>
    </div>
  );
}

export default ChildA;
