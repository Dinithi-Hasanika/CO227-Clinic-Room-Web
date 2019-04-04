import React, { Component } from "react";

import fire from "./config/fire";

import Dialog from "./Dialog";

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      isOpen: false
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.handleSendPasswordResetEmail = this.handleSendPasswordResetEmail.bind(
      this
    );
  }
  handleChangeEmail(e) {
    let target = e.target;

    let value = target.value;

    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSendPasswordResetEmail(e) {
    // e.preventDefault();

    fire
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(u => {
        console.log("success");
      })
      .catch(error => this.setState({ isOpen: true }));
  }
  render() {
    return (
      <div>
        <h1>Change Your Password</h1>
        <p />
        <div>Enter Your Email below to Send the Password reset link</div>
        <p />

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
            onChange={this.handleChangeEmail}
          />
        </div>
        <button
          className="FormField__Button mr-20"
          onClick={this.handleSendPasswordResetEmail}
        >
          Send Link
        </button>
        <Dialog
          isOpen={this.state.isOpen}
          onClose={e => this.setState({ isOpen: false })}
        >
          Invalid Email Address or Can not Send the Email Right Now
        </Dialog>
      </div>
    );
  }
}

export default ForgotPassword;
