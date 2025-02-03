import { useState } from "react";
import "../style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>
      <div className="btns-container">
        <button className="increment" onClick={increment}>
          Increment
        </button>
        <button className="increment" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
