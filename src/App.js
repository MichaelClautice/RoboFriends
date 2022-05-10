// ♦️ IMPORT STATEMENTS
import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robotsArray } from "./robots.js";
// •••••••••••••••••••

// declare a Class Component
// access React.Component's functions
class App extends Component {
  // constructor() allocates memory & initializes th state obj
  constructor() {
    // super() calls th constructor. This is req'd to access vars of its parent class
    super()
    // ‘this’ refers to th obj it belongs to
    this.state = {
      robotsProps: robotsArray,
      searchfield: ""
    }
  }

  onSearchChange = (userEvent) => {
    this.setState({ searchfield: userEvent.target.value });
  }

  render() {
    const filteredRobots = this.state.robotsProps.filter(robotsProps => {
      return robotsProps.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robotsProps={filteredRobots} />
      </div>
    );
  }
}

// ♦️ EXPORT STATEMENT
export default App;
