import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Home component
const Home = (props) => <h1>welcome Home</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/home" Component={Home}></Route>
        </div>
      </Router>
    );
  }
}
