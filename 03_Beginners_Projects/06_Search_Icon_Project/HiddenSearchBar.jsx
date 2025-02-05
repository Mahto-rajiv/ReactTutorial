import { useState } from "react";
import "../style.css";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [bgColor, setBgColor] = useState("white");
  const [showInput, setShowInput] = useState(false);

  // Event bubbling: Click propagates from target (icon/input) to container
  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      // Click directly on container (not input or icon)
      setShowInput(false);
      setBgColor("white");
    }
  };
  return (
    <section
      className="container"
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
