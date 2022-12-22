/* 
This component helps visually identify which components are being re-rendered. 
I just wanted to see that when a todo item is checked, it is the only component that
re-renders. All the others are not re-rendered.
*/

import { ReactNode } from "react";
import "../App.css";

export default function HighlightOnRerender(props: { children: ReactNode }) {
  return (
    <div style={{ position: "relative", margin: "2px" }}>
      {props.children}
      <div
        key={Math.random()}
        className="highlight-div"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>
    </div>
  );
}
