import React, { useState } from "react";
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        className="minus"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <button
        className="plus"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
