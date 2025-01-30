import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2 bg-white p-4 rounded-lg shadow-md w-64 mx-auto">
      <p className="text-2xl font-semibold">Count: {count}</p>
      <div className="flex space-x-2">
        <button
          onClick={handleIncrement}
          className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
