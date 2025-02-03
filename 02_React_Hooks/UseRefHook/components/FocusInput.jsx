import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);
  const handleFocus = () => {
    inputElement.current.focus();
    inputElement.current.value = "Rajiv";
  };
  return (
    <div>
      <input type="text" ref={inputElement} className="border-2" />
      <button onClick={handleFocus}>Click to see results</button>
    </div>
  );
};

export default FocusInput;
