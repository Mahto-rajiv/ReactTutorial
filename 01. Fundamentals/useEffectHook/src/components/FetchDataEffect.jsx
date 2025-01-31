import { useState, useEffect } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);
  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>
          <li>{todo.title}</li>
          <br />
        </div>
      ))}
    </div>
  );
};

export default FetchDataEffect;
