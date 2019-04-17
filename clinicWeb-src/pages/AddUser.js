import React, { Component } from "react";

import Select from "react-select";

import "bootstrap/dist/css/bootstrap.min.css";

import fire from "../config/fire";

import { connect } from "react-redux";

import { signUpForm } from "../store/actions/UserActions";

class AddUser extends Component {
  constructor() {
    super();

    this.state = {
      email: "",

      password: "",

      userName: "",

      hasAgreed: true,

      memtype: 0
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

    let value = target.value;

    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    //console.log("The form was submitted with the following data:");

    // console.log(this.state);

    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });

    this.props.signUpForm(this.state);
  }
  handleSelect(e) {
    this.setState({
      [e.name]: e.value
    });
  }
  render() {
    return (
      <div className="FormCenter ml-3">
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
          <p />
          <div className="FormField">
            <button className="FormField__Button mr-20">Add User</button>{" "}
          </div>
        </form>
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
)(AddUser);
