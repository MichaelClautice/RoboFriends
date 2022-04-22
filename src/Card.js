import React from "react";

// remember - this is an ES6 arrow fnctn
const Card = (props) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">

      <img alt='robots' src='https://robohash.org/test?200x200' />

      <div>
{/* hey look!! - comments in JSX are automatically inside curly braces */}
{/* JS expressions must be in curly braces */}
        <h2>{props.name}</h2>
        <p>{props.email}</p>

      </div>





    </div>
  );
};

export default Card;