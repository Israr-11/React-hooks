import React from "react";
import { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [data, setData] = useState([]);


    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
 
   console.log("Data from an api is:", data)
  return (
    <ul>
      {data.map(items => (
        <li key={items.id}>{items.name}</li>
      ))}
    </ul>
  );
};

export default HookUseEffect;
