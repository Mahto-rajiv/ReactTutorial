import { useReducer, useState } from "react";
import { initialState, counterReducer } from "../CounterReducer.js";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">
        Count: {state.count}
      </h1>

      <div className="space-x-4 mb-6">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Decrement
        </button>
      </div>

      <div className="mb-6">
        <input
          type="number"
          placeholder="Enter your number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-48 text-center"
        />
      </div>

      <div className="space-x-4">
        <button
          type="submit"
          onClick={() =>
            dispatch({ type: "incrementByAmount", payload: Number(inputValue) })
          }
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Increment By Number
        </button>
        <button
          type="submit"
          onClick={() =>
            dispatch({ type: "decrementByAmount", payload: Number(inputValue) })
          }
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
        >
          Decrement By Number
        </button>
      </div>
    </div>
  );
};

export default Counter;
