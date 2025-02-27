import { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);
  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <br />
      <input type="text" className="border-2" key={sw ? "dark" : "light"} />
      <button onClick={() => setSw((sw) => !sw)}>Switch</button>
    </div>
  );
};

export default Switcher;
