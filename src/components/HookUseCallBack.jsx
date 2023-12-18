import React, { useState, useCallback } from "react";

//This function has two arguments one is the onClick event that is being passed from JSX, 
//and other is the label that is increment that too being passed from Button element from 
// the div of JSX

function Button({ onClick, label }) {
  console.log(`Rendering button with label: ${label}`);
  return <button onClick={onClick}>{label}</button>;
}

function HookUseCallBack() {
  const [count, setCount] = useState(0);

  // Without useCallback: Button component would re-render on every state change
  // const handleClick = () => setCount(count + 1);

  // With useCallback: Button component is memoized and only re-created when count changes
  const handleClick = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} label="Increment" />
    </div>
  );
}

export default HookUseCallBack;
