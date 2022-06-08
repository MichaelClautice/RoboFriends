// ♦️ IMPORT STATEMENTS
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
// import CardList from "./CardList.js";
import "tachyons";
// does index.js need robotsArray?
// import { robotsArray } from './robots.js';
// •••••••••••••••••••

// ReactDOM pkg's render() function will render JSX into the "root" <div>

// render() th App component w React 18's createRoot() method
// render App inside 'root'
ReactDOM.createRoot(document.getElementById("root")).render(<App />);


