import React, { Component } from "react";

import { Link } from "react-router-dom";

import Select from "react-select";

import "bootstrap/dist/css/bootstrap.min.css";

import fire from "./config/fire";

import { connect } from "react-redux";

import { signUpForm } from "./store/actions/UserActions";

import StripeCheckout from "react-stripe-checkout";

import Dialog from "./Dialog";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",

      password: "",

      userName: "",

      hasAgreed: false,

      memtype: 0,

      isPay: false,

      isPassword: false,

      isOpen: false
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleSelect = this.handleSelect.bind(this);
  }
  membershipType = [
    { label: "Member Type-1", value: 1, name: "memtype" },
    { label: "Member Type-2", value: 2, name: "memtype" },
    { label: "Member Type-3", value: 3, name: "memtype" },
    { label: "Member Type-4", value: 4, name: "memtype" },
    { label: "Member Type-5", value: 5, name: "memtype" }
  ];

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

    //console.log("The form was submitted with the following data:");

    console.log(this.state.isPay);
    if (this.state.isPay) {
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {})
        .catch(error => {
          console.log(error);
          this.setState({ isPassword: true });
        });

      this.props.signUpForm(this.state);
    } else {
      this.setState({ isOpen: true });
    }
  }
  handleSelect(e) {
    this.setState({
      [e.name]: e.value
    });
  }

  onToken = token => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      // response.json().then(data => {
      // alert(`We are in business, ${data.email}`);
      // });
      console.log(token);
      this.setState({ isPay: true });
    });
  };

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              User Name
            </label>

            <input
              type="text"
              id="userName"
              className="FormField__Input"
              placeholder="Enter User Name"
              name="userName"
              value={this.state.userName}
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
          <div className="select_field">
            <Select
              options={this.membershipType}
              placeholder="Select MemberShip Type"
              name="memtype"
              onChange={this.handleSelect}
            />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="" className="FormField__TermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
            <p />
            <StripeCheckout
              token={this.onToken}
              stripeKey="pk_test_OMqa8U8jMUHpkWcEpRfRbUEE00z0CFVOPx"
              amount={1000}
            />
          </div>
        </form>
        <Dialog
          isOpen={this.state.isPassword}
          onClose={e => this.setState({ isPassword: false })}
        >
          Password Should Be Strong!!!
        </Dialog>
        <Dialog
          isOpen={this.state.isOpen}
          onClose={e => this.setState({ isOpen: false })}
        >
          Please Pay $10 Before Sign Up!!!
        </Dialog>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signUpForm: userDatas => dispatch(signUpForm(userDatas))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
