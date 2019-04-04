import React, { Component } from "react";

import { Link } from "react-router-dom";

import fire from "./config/fire";

import Dialog from "./Dialog";

import Home from "./Home";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",

      password: "",

      isOpen: false
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleError = this.handleError.bind(this);
  }

  handleChange(e) {
    let target = e.target;

    let value = target.type === "checkbox" ? target.checked : target.value;

    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    //  console.log("The form was submitted with the following data:");

    //console.log(this.state);

    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => this.setState({ isOpen: true }));
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>

            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>{" "}
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
          <Dialog
            isOpen={this.state.isOpen}
            onClose={e => this.setState({ isOpen: false })}
          >
            Invalid Password!! Please Check And Try Again
          </Dialog>
          <Link to="/forgot-password">Forgot Password?</Link>
        </form>
      </div>
    );
  }
}

export default SignInForm;
