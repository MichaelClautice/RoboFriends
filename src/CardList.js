// ♦️ IMPORT STATEMENTS
import React from "react";
import Card from "./Card";
// •••••••••••••••••••

// destructured robot props as param
// NOT the props from robots array
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
}
// ♦️ EXPORT STATEMENT
export default CardList;
