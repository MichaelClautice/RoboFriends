// ♦️ IMPORT STATEMENTS
import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import { robotsArray } from "./robots.js";
import "./App.css";
// •••••••••••••••••••

// declare a Class Component for App
// access React.Component's functions
class App extends Component {
  // constructor() allocates memory & initializes th state obj
  constructor() {
    // super() calls th constructor. This is req'd to access vars of its parent class
    super();
    // create the state obj
    // ‘this’ refers to th obj it belongs to
    // this.state = {
    //   robotsProps: robotsArray,
    //   searchfield: ""
    // }
    this.state = {
      robotsProps: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    // fetch the users
    fetch("https://jsonplaceholder.typicode.com/users")
    // we get a response
      .then(response => response.json())
    // updating the users w setState
      .then(users => this.setState({ robotsProps: users }));
  }

  onSearchChange = (userEvent) => {
    console.log(userEvent.target.value);
    this.setState({ searchfield: userEvent.target.value });
  };

  render() {
    const filteredRobots = this.state.robotsProps.filter((robotsProps) => {
      return robotsProps.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robotsProps.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robotsProps={filteredRobots} />
        </div>
      );
    }

  }
}

// ♦️ EXPORT STATEMENT
export default App;
