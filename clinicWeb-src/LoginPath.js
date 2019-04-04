import React, { Component } from "react";

import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

import SignUpForm from "./SignUpForm";

import SignInForm from "./SignInForm";

import "./Login.css";

import fire from "./config/fire";

import ForgotPassword from "./ForgotPassword";

import ChangePassword from "./ChangePassword";

class LoginPath extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside">
            <div className="App_Aside_text">
              &nbsp;A Complete &nbsp;Note Set For &nbsp;RACGP &nbsp;Fellowship
              &nbsp;Exam
            </div>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>

              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />

            <Route path="/sign-in" component={SignInForm} />

            <Route exact path="/forgot-password" component={ForgotPassword} />

            <Route path="/change-password" component={ChangePassword} />
          </div>
        </div>
      </Router>
    );
  }
}

export default LoginPath;
