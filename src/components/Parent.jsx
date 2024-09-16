import ChildB from "./ChildB";
import ChildA from "./ChildA";
import MyButton from "./MyButton";
import { useState } from "react";

function Parent() {
  const [number, setNumber] = useState(0);
  const clickHandler = () => {
    setNumber((number) => number / 2);
  };

  return (
    <div style={{ border: "2px solid", padding: "20px", margin: "20px" }}>
      <h1>Parent</h1>
      <h2>Lifting state up!</h2>
      <button onClick={() => setNumber((number) => number + 1)}>+ </button>

      <ChildA number={number} setNumber={setNumber} />
      <ChildB
        number={number}
        setNumber={setNumber}
        text={<button onClick={clickHandler}>Prop Button!</button>}
        clickHandler={clickHandler}
        button={<MyButton clickHandler={clickHandler} />}
      />
      <MyButton clickHandler={clickHandler} />
    </div>
  );
}

export default Parent;
