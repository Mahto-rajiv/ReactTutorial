import { useState } from "react";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddToTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      setTaskList((prev) => [...prev, taskInput]);
      setTaskInput("");
    }
  };
  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
      <form onSubmit={handleAddToTask} className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter your task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {taskList.map((task, index) => (
          <li
            key={index}
            className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100"
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
