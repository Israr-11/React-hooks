import React, { useState, useMemo } from "react";

function ExpensiveCalculation({ value }) {
  // Without useMemo: This computation would run on every render
  // const result = computeExpensiveValue(value);

  // With useMemo: The result is memoized and only recomputed if 'value' changes
  const result = useMemo(() => computeExpensiveValue(value), [value]);

  return <p>Result: {result}</p>;
}

// Expensive computation function
function computeExpensiveValue(value) {
  console.log("Computing expensive value...");
  // Simulating a time-consuming computation
  return value * 2;
}

function HookUseMemo() {
  const [inputValue, setInputValue] = useState(10);

  const handleChange = (event) => {
    setInputValue(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleChange} />
      <ExpensiveCalculation value={inputValue} />
    </div>
  );
}

export default HookUseMemo;
