import { useState } from "react";

const ShoppingList = () => {
  const [objectArray, setObjectArray] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity || isNaN(quantity) || quantity <= 0) return;

    const newItem = {
      name: name,
      quantity: parseInt(quantity),
    };
    setObjectArray((prev) => [...prev, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6">Shopping List</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <p className="text-lg">Product Name</p>
          <input
            type="text"
            value={name}
            placeholder="Enter your product name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <p className="text-lg">Quantity</p>
          <input
            type="number"
            value={quantity}
            placeholder="Enter product quantity"
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Item
        </button>
      </form>

      <ul className="mt-6 space-y-4">
        {objectArray.map((data, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
            <span className="font-semibold">{data.name}</span> - Quantity:{" "}
            <span className="text-blue-500">{data.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
