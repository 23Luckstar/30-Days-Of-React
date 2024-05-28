import React, { Component } from "react";
import ReactDOM from "react-dom";

export class App extends Component {
  firstName = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.firstName.current.value);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            ref={this.firstName}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
