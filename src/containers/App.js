// ♦️ IMPORT STATEMENTS
import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robotsArray } from "./robots.js";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
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
    this.state = {
      robotsProps: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    // fetch the users
    fetch("https://jsonplaceholder.typicode.com/users")
      // we get a response
      .then((response) => response.json())
      // updating the users w setState
      .then((users) => this.setState({ robotsProps: users }));
  }
  onSearchChange = (userEvent) => {
    console.log(userEvent.target.value);
    this.setState({ searchfield: userEvent.target.value });
  };
  render() {
    const { robotsProps, searchfield } = this.state;
    const filteredRobots = robotsProps.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // use ternary statement as alt to if-else statement
    // if the robotsProps.length is zero then a FALSE is rtrnd
    // use the not operator & make it TRUE or visa versa
    return !robotsProps.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Mike's Robo Friends!</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robotsProps={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
// ♦️ EXPORT STATEMENT
export default App;
