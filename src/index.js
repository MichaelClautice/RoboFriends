// ♦️ IMPORT STATEMENTS
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
// import CardList from "./CardList.js";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
// does index.js need robotsArray?
// import { robotsArray } from './robots.js';
// •••••••••••••••••••

// ReactDOM pkg's render() function will render JSX into the "root" <div>

// render() th App component
ReactDOM.render(
  <App />, document.getElementById("root")
);

reportWebVitals();
