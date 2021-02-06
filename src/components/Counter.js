import React, { useState } from "react";
import { FiMinus, FiPlus } from 'react-icons/fi';
export default function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div className="container flex-column">
      <div className="container">
        <button className="btn warning" onClick={() => setCount(count - 1)}>
          <FiMinus style={{"font-size":"1.5rem"}} />
        </button>
        <h1 className="flex-center _m12">{count}</h1>
        <button className="btn success" onClick={() => setCount(count + 1)}>
          <FiPlus style={{"font-size":"1.5rem"}} />
        </button>
      </div>
    </div>
  );
}
