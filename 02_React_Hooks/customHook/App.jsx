import {} from "react";
import useFetch from "./components/useFetch";

const App = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts/");
  console.log(data);
  return (
    <div>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</div>
  );
};

export default App;
