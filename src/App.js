import React, { Component } from "react";

//import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

//import SignUpForm from "./pages/SignUpForm";

import LoginPath from "./LoginPath";
import Home from "./Home";
import "./App.css";
import fire from "./config/fire";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="App">{this.state.user ? <Home /> : <LoginPath />}</div>
    );
  }
}

export default App;
