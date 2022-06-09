// ♦️ IMPORT STATEMENTS
import React from "react";
// •••••••••••••••••••
// name, email & id props are recieved as parameters & destructured at th same time
const Card = ({ name, email, id }) => {
  return (
    // <div className="tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5">
        <div className="tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
// ♦️ EXPORT STATEMENT
export default Card;
