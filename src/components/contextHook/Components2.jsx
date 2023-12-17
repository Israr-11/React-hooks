// ComponentB.js
import React, { useContext } from "react";
import MyContext from "./MyContext";

const Component2 = () => {
  // Consume the context in your component
  const { value } = useContext(MyContext);

  return (
    <div>
      <p>Component 2</p>
      <p>Value from context: {value}</p>
    </div>
  );
};

export default Component2;
