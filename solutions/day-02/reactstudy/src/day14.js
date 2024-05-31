import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./styles/header.scss";

const User = ({ firstName }) => (
  <div>
    <h1>{firstName}</h1>
  </div>
);
export class App extends Component {
  constructor(props) {
    super(props);
    console.log("I am  the constructor and  I will be the first to run.");
    this.state = {
      firstName: "John",
      day: 1,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(nextState.day);
    if (nextState.day > 31) {
      return false;
    } else {
      return true;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.day == 30) {
      this.setState({
        congratulate: "Congratulations,Challenge has been completed",
      });
    }
    console.log(prevProps, prevState);
  }
  // the doChallenge increment the day by one
  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    });
  };
  headerData = {
    welcome: "30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: { firstName: "Asabeneh", lastName: "Yetayeh" },
    date: "Oct 15, 2024",
  };
  render() {
    return (
      <div className="App">
        <Header data={this.headerData} />
        <h1>React Component Life Cycle</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
        <Footer />
      </div>
    );
  }
}
