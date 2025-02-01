// We setup useEffect hook to run some code when
// component Renders for the first time && whenever it re-renders & some data in our component changed.

import {} from "react";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";

const App = () => {
  return (
    <>
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
    </>
  );
};

export default App;
