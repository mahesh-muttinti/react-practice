import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
