// Component1.js
import React, { useContext } from "react";
import MyContext from "./MyContext";

const Component1 = () => {
  // Consume the context in your component
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Component A</p>
      <p>Value from context: {value}</p>
      <button onClick={() => setValue("New Value")}>Change Value</button>
    </div>
  );
};

export default Component1;
