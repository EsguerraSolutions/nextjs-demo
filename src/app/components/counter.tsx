"use client";
import { useState } from "react";

const Counter = () => {
  console.log("Counter component");
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}> Cliked {count} times </button>
  );
};

export default Counter;
