import { useState } from "react";
import useDispatch from "../redux/use-dispatch";
import "../App.css";
import HighlightOnRerender from "../redux/highlight-on-rerender";

const generateUniqueId = (() => {
  let id = 0;
  return () => id++;
})();

export default function Input() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter")
      dispatch({
        type: "todos/add",
        payload: { id: generateUniqueId(), text: value },
      });
  };

  return (
    <HighlightOnRerender>
      <div className="input-container">
        <input
          placeholder="What needs to be done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </HighlightOnRerender>
  );
}
