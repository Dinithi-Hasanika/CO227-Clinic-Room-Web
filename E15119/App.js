import React, { Component } from "react";

//import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

//import SignUpForm from "./pages/SignUpForm";

import LoginPath from "./LoginPath";
import Home from "./Home";
import "./App.css";
import fire from "./config/fire";
import Logs from "./Logs";
class App extends Component {
  render() {
    return <Logs />;
  }
}

export default App;
