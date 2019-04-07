import React, { Component } from "react";

//import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

//import SignUpForm from "./pages/SignUpForm";

import LoginPath from "./LoginPath";

import "./Login.css";
import fire from "./config/fire";
import Admin from "./pages/Admin";
import MemberPage from "./components/Member";

class Logs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAdmin: false
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        if (this.state.user.email === "dulapreethi@gmail.com") {
          this.setState({ isAdmin: true });
        }
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    if (this.state.isAdmin === true) {
      return (
        <div className="App">{this.state.user ? <Admin /> : <LoginPath />}</div>
      );
    } else {
      return (
        <div className="App">
          {this.state.user ? <MemberPage /> : <LoginPath />}
        </div>
      );
    }
  }
}

export default Logs;
