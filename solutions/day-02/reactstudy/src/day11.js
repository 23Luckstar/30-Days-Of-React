import React, { Component } from "react";
// import ReactDOM from "react-dom";

class App extends Component {
  state = {
    firstName: "",
    message: "",
    key: "",
  };
  handleClick = (e) => {
    this.setState({
      message: "welcome to the world of events",
    });
  };
  handleMouseMove = (e) => {
    this.setState({ message: "mouse is moving" });
  };

  handleChange = (e) => {
    this.setState({ firstName: e.target.value, message: e.target.value });
  };

  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    });
  };

  handleBlur = (e) => {
    this.setState({
      message: "Input field has been blurred",
    });
  };

  handleCopy = (e) => {
    this.setState({
      message: "Using 30 Days of React for commercial purpose is not allowed",
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>
        <button onClick={this.handleClick}>click me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
          Check copy right permission by copying this text
        </p>
        <p>{this.state.message}</p>
        <label htmlFor="">Test for onKeyPress Event:</label>
        <input type="text" onKeyPress={this.handleKeyPress} />
        <br />
        <label htmlFor="">Test for onBlur Event:</label>
        <input type="text" onBlur={this.handleBlur} />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              onChange={this.handleChange}
              name="firstName"
              value={this.state.value}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
