// ♦️ IMPORT STATEMENTS
import React from "react";
import Card from "./Card";
// •••••••••••••••••••
// destructured robot props as param
// NOT the props from robots array
const CardList = ({ robotsProps }) => {
  // temporary test if-statement to display the error mssg
  // if (true) {
  //   throw new Error("THIS IS AN ERROR")
  // }
  return (
    <div>
      {robotsProps.map((user, i) => {
        return (
          <Card
            key={i}
            id={robotsProps[i].id}
            name={robotsProps[i].name}
            email={robotsProps[i].email}
          />
        );
      })}
    </div>
  );
};
// ♦️ EXPORT STATEMENT
export default CardList;
