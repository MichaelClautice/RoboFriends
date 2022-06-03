// ♦️ IMPORT STATEMENTS
import React from "react";
// •••••••••••••••••••
// Props provide a channel through which components communicate.
const Scroll = (props) => {
  return (
    <div
      style={{ overflowY: "scroll", border: "5px solid blue", height: "800px" }}
    >
      {props.children}
    </div>
  );
};
// ♦️ EXPORT STATEMENT
export default Scroll;
