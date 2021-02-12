import React, { Component } from "react";
// import Form from "../Form";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.email) {
      alert("Enter your email address please!");
    } else if (this.state.password.length < 6) {
      alert(`Choose a more secure password ${this.state.email}`);
    } else {
      alert(`Hello ${this.state.email}`);
    }

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <p>Hello {this.state.email}</p>
        <form className="form">
          <input
            value={this.state.email}
            name="email address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
