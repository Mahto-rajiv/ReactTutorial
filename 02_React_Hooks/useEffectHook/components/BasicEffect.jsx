import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("hello");
  }, []);
  return <div>BasicEffect</div>;
};

export default BasicEffect;
