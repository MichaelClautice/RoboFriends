// ♦️ IMPORT STATEMENTS
import React from "react";
// •••••••••••••••••••
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b- -green bg-lightest-blue"
        type="search"
        placeholder="search robots here"
        onChange={searchChange}
      />
    </div>
  );
};
// ♦️ EXPORT STATEMENT
export default SearchBox;
