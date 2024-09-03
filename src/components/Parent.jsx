import ChildB from "./ChildB";
import ChildA from "./ChildA";

function Parent() {
  return (
    <div>
      <h1>Parent</h1>
      <ChildA />
      <ChildB />
    </div>
  );
}

export default Parent;
