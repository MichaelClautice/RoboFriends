// ♦️ IMPORT STATEMENTS
import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robotsArray } from "./robots";
import userEvent from "@testing-library/user-event";
// •••••••••••••••••••

// declare a Class component
// access React.Component's functions
class App extends Component {
  // constructor() allocates memory & initializes th state obj
  constructor() {
    // super() calls th constructor. This is req'd to access vars of its parent class
    super();
    // ‘this’: refers to th obj it belongs to
    this.state = {
      robotsProps: robotsArray,
      searchfield: "",
    };
  }

  onSearchChange(userEvent) {
    console.log(userEvent.target.value);
  }

  // render for the browser view
  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robotsProps={this.state.robotsProps} />
      </div>
    );
  }
}
// ♦️ EXPORT STATEMENT
export default App;
