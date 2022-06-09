// ♦️ IMPORT STATEMENTS
import React from "react";
// •••••••••••••••••••
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b- -green bg-lightest-blue ba bw2 b--black"
        type="search"
        placeholder="search robot's name"
        onChange={searchChange}
      />
    </div>
  );
};
// ♦️ EXPORT STATEMENT
export default SearchBox;
