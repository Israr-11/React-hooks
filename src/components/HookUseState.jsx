import React from "react";
import { useState } from "react";

const HookUseState = () => {
  //current state name is count and the function that is used to update current state is setCount

  //const [count, setCount] = useState(0);
  //   console.log("count value is as:", count);
  //   console.log("The value of setCount is as:", setCount);

  const [color, setColor] = useState("red");

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Click to count</button> */}
      <p>The color is {color}</p>
      <button onClick={() => setColor("green")}>Click Me</button>
    </div>
  );
};

export default HookUseState;
