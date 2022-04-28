// ♦️ IMPORT STATEMENTS
import React from "react";
// ReactDOM is specific to browser DOM
import ReactDOM from "react-dom";
import "./index.css";
import CardList from "./CardList.js";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { robots } from './robots.js';
// •••••••••••••••••••

// ReactDOM pkg's render() function will render JSX into the "root"

// ReactDOM.render() will grab th 'root'

// th "root" is an ID attribute in index.html's <div id="root"></div>

// render() th Card components
ReactDOM.render(
  <CardList robots={robots}/>
  , document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
